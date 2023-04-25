import axios from "axios"
import { useState } from "react"

export default function ResumeUpload() {
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
    setTimeout(() => {
      setStatus("")
    }, "5000");

    setFile(null)
  }

  return (
    <div className="flex justify-center mt-20 ">
      <div className="flex flex-col  w-[600px] gap-6 px-4 py-4 ring-1 ring-slate-100/10 rounded-md ">
        <div className="flex gap-2 align-middle items-center  ">
          <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
            <circle cx="5" cy="5" r="4.5"></circle>
            <circle cx="21" cy="5" r="4.5"></circle>
            <circle cx="37" cy="5" r="4.5"></circle></svg>
        </div>
        <h1 className="text-md md:text-2xl pb-9  font-semibold text-center">Update Resume</h1>
        <div className="flex justify-center place-items-center gap-6">
          <label for="selectFile" class="custom-file-upload  proj-btn btn-glow text-md font-semibold">
           Browse 
          </label>
          <input
            type="file"
            accept=".pdf"
            name="pdf"
            id="selectFile"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <p >{file ? file.name : 'No File Selected'}</p>
        </div>
        <div className="flex justify-center">
          <button onClick={uploadFile} class="relative mt-10 inline-flex  p-[1px] gh-glow  font-semibold overflow-hidden text-md font-medium text-gray-900 rounded-md group bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
            <span class="relative transition-all ease-in duration-75 bg-white dark:bg-black gh-btn rounded-md group-hover:bg-opacity-0 hover:text-black">
              {loading ? 'Loading' : 'Upload'}
            </span>
          </button>
        </div>
        <p className="text-green-400 text-xs md:text-xs text-center   text-gray-400 tracking-widest  font-semibold uppercase ">{status}</p>
      </div>
    </div>
  )
}
