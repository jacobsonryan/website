import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import axios from "axios"
import { useState } from "react"

export default function FileUpload() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const uploadFile = async () => {
    setLoading(true)
    setStatus("")

    let { data } = await axios.post("/api/upload", {
      name: file.name,
      type: file.type,
    })

    const url = data.url

    await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    })

    setLoading(false)
    setStatus(`${file.name} successfully uploaded!`)
    setFile(null)
  }

  return (
    <>
      <input
        type="file"
        accept=".pdf"
        name="pdf"
        id="selectFile"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={uploadFile}>Upload</button>
      <p className={`${loading ? 'block' : 'hidden'}`}>Loading...</p>
      <p>{status}</p>
      <a href="/api/auth/logout">Logout</a>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
