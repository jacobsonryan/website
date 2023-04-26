import axios from "axios"
import { useState, useEffect } from "react"

export default function ResumeUpload() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [modified, setModified] = useState("")


  const getFormattedTime = (fourDigitTime) => {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'PM' : 'AM';
    var minutes = fourDigitTime.substring(2);

    return hours + '' + minutes + amPm;
};

  useEffect(() => {
    axios.get('/api/last-modified').then(res => {
      const date = new Date(res.data.lastModified).toJSON().slice(0, 19).replace('T', ' ')
      let time = date.split(' ')[1]
      setModified("Last Updated on " + date.split(' ')[0] + " at " + getFormattedTime(time))
    })
  }, [file])

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
    <>
    <div className="flex mt-20 flex-col md:flex-row w-[90%] justify-center px-4 gap-4">
      <div className="flex flex-col w-full md:w-[50%]   gap-6 px-4 py-4 ring-1 ring-slate-100/10 rounded-md ">
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
    <div className="ring-1 ring-slate-100/10  w-full md:w-[50%] h-[350px]  rounded-md  justify-center items-center">
    <div className="flex gap-2 align-middle items-center px-4 pt-4">
      <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
        <circle cx="5" cy="5" r="4.5"></circle>
        <circle cx="21" cy="5" r="4.5"></circle>
        <circle cx="37" cy="5" r="4.5"></circle></svg>
    </div>
      <div className="flex justify-center place-items-center mt-32">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9ca3af" class="w-9 h-9 px-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
      <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold uppercase ">{modified}</p>
    </div>
    </div>
    </div>
    </>
  )
}
