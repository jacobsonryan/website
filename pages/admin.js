import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import axios from "axios"
import { useState, useEffect } from "react"
import ResumeUpload from '../components/ResumeUpload'

export default function Admin() {
  const [hidden, setHidden] = useState(true)
  const [title, setTitle] = useState("")
  const [lang, setLang] = useState("")
  const [desc, setDesc] = useState("")
  const [repo, setRepo] = useState("")
  const [demo, setDemo] = useState("")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
      })
  }, [projects])


  const handleSubmit = () => {
    axios.post('api/projects', {
      title: title,
      description: desc,
      view: demo,
      code: repo,
      lang: lang
    })
    setDesc("")
    setTitle("")
    setLang("")
    setDemo("")
    setRepo("")
    setHidden(true)
  } 


  const handleDelete = (index) => {
    axios.delete('api/projects', {
      data: { id: index }
    })
  }

  return (
    <>
      <div className="flex justify-center place-items-center flex-col ">
          <ResumeUpload />
        <div className="grid grid-cols-1 gap-4 p-4 w-[90%] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 ">
          <div className={`bg-gray-800 h-64 bg-opacity-0 backdrop-blur-lg border-dashed border-[1px] border-slate-100/10 transition-all duration-100 hover:border-[#333333] ring-slate-100/10 rounded-md order-first cursor-pointer `} onClick={() => setHidden(false)}>
            <div className="flex gap-2 align-middle items-center px-4 pt-4">
              <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
                <circle cx="5" cy="5" r="4.5"></circle>
                <circle cx="21" cy="5" r="4.5"></circle>
                <circle cx="37" cy="5" r="4.5"></circle></svg>
            </div>
              <div className="flex justify-center mt-[90px] place-items-center items-center">
                <p className="text-xs md:text-xs   text-gray-400 tracking-widest  font-semibold uppercase place-items-center">New Project</p>
              </div>
            </div>
          {projects.map((project, index) => {
            return (
              <div key={index} className={`bg-gray-800 h-64 bg-opacity-0 backdrop-blur-lg flex flex-col justify-between ring-1 ring-slate-100/10   ${project.id == 1 ? 'order-first' : 'order-last'} rounded-md`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5 absolute right-4 top-4 cursor-pointer" onClick={() => handleDelete(project.id)}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
                <div className="flex gap-2 align-middle items-center px-4 pt-4">
                  <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
                    <circle cx="5" cy="5" r="4.5"></circle>
                    <circle cx="21" cy="5" r="4.5"></circle>
                    <circle cx="37" cy="5" r="4.5"></circle></svg>
                </div>
                <div className="p-4 pt-2 flex flex-col flex-start grow">
                  <p className="text-md md:text-xl pb-1  font-semibold">{project.title}</p>
                  <span className={`text-xs w-min font-medium mr-2 p-[1px] rounded-xl  relative inline-flex items-center justify-center p-[1px] font-semibold overflow-hidden text-md font-medium text-gray-900 rounded-md group bg-gradient-to-r from-purple-600 to-blue-600 text-white`}>
                    <p className="relative transition-all ease-in duration-75 bg-white dark:bg-black  rounded-xl px-2 ">{project.lang}</p>
                  </span>
                  <p className="text-sm  md:text-sm font-normal sm:text-md pt-1 text-gray-400">{project.description}</p>
                </div>
                <div className="p-4 gap-4 flex flex-end">
                    <a href={project.code} target="_blank" className="text-gray-400 hover:text-white">Github</a>
                    <a href={project.view} target="_blank" className="text-gray-400 hover:text-white" style={{display: project.view != '' ? 'block' : 'none'}}>Demo</a>
                </div>
              </div>
            )
          })}
          </div>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${hidden ? 'hidden' : 'block'} fixed bg-[#00000090] justify-center flex flex-col items-center backdrop-blur rounded-md  top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 absolute right-4 top-4 cursor-pointer" onClick={() => setHidden(true)}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          <h2 className="mt-20 font- text-5xl font-extrabold align-left text-center "><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">New Project</span></h2>
          <div className="flex flex-col gap-6  w-[600px]">
            <div className="flex flex-col mt-20">
              <label for="title">Project Title</label>
              <input name="title" className="bg-black ring-1 ring-slate-100/10 rounded-md p-2 mt-2 outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label for="language">Language</label>
              <input name="language" className="bg-black ring-1 ring-slate-100/10 rounded-md p-2 mt-2 outline-none" value={lang} onChange={(e) => setLang(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label for="description">Description</label>
              <textarea name="description" className="bg-black ring-1 ring-slate-100/10 rounded-md p-2 mt-2 outline-none" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label for="repo">Github Repo</label>
              <input name="repo" className="bg-black ring-1 ring-slate-100/10 rounded-md p-2 mt-2 outline-none" value={repo} onChange={(e) => setRepo(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label for="demo">Demo</label>
              <input name="demo" className="bg-black ring-1 ring-slate-100/10 rounded-md p-2 mt-2 outline-none" value={demo} onChange={(e) => setDemo(e.target.value)}/>
            </div>
          </div>
          <div className="flex justify-center m-16">
            <a className="proj-btn btn-glow text-md font-semibold" onClick={handleSubmit} >Submit</a>
          </div>
          </div>
        </div>
        <div className="flex justify-center m-16">
          <a className="proj-btn btn-glow text-md font-semibold" href="/api/auth/logout">Logout</a>
        </div>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
