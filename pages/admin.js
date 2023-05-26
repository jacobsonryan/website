import Head from 'next/head'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import axios from "axios"
import { useState, useEffect } from "react"
import ResumeUpload from '../components/ResumeUpload'

export default function Admin() {
  const [hover, setHover] = useState()
  const [hidden, setHidden] = useState(true)
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState("")
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
        setProjects(data.sort((a, b) => a.id - b.id))
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
    setId("")
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

  const openModal = () => {
    setHidden(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setHidden(true)
    setEdit(false)
    setId("")
    setDesc("")
    setTitle("")
    setLang("")
    setDemo("")
    setRepo("")
    document.body.style.overflow = 'auto'
  }

  const openEdit = (index) => {
    setHidden(false)
    setEdit(true)
    setId(projects[index].id)
    setDesc(projects[index].description)
    setTitle(projects[index].title)
    setLang(projects[index].lang)
    setDemo(projects[index].code)
    setRepo(projects[index].view)
  }



  const update = async () => {
    try {
      const response = await axios.put('/api/update', {
        id: id,
        title: title,
        description: desc,
        view: repo,
        code: demo,
        lang: lang,
      });

      if (response.status === 200) {
        const updatedSnippet = response.data;
        console.log(updatedSnippet); 
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      console.error(error);
    }
    setEdit(false)
    setHidden(true)
    setId("")
    setDesc("")
    setTitle("")
    setLang("")
    setDemo("")
    setRepo("")
  };

  const handleMouseEnter = (i) => {
    setHover(i)
  }

  const handleMouseLeave = () => {
    setHover()
  }

  return (
    <>
      <Head>
        <title>Ryan Jacobson | Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center place-items-center flex-col">
          <ResumeUpload />
        <div className="grid grid-cols-1 gap-4 p-4 w-[90%] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 ">
          <div className={`bg-gray-800 h-64 bg-opacity-0 backdrop-blur-lg border-dashed border-[1px] border-slate-100/10 transition-all duration-200 hover:border-slate-100/30 rounded-2xl order-first cursor-pointer `} onClick={() => openModal()}>
              <div className="flex justify-center mt-[90px] place-items-center items-center">
                <p className="text-xs md:text-xs  mt-5 text-gray-400 tracking-widest  font-semibold uppercase place-items-center">New Project</p>
              </div>
            </div>
          {projects.map((project, index) => {
            return (
              <div>
                <div className="flex relative z-[10]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-12 top-[18px] cursor-pointer" onClick={() => openEdit(index)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-4 top-[18px] cursor-pointer" onClick={() => handleDelete(project.id)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <a href={project.view ? project.view : project.code} target="__blank" key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} >
                  <div className={`cursor-pointer hover:ring-slate-100/30 duration-200 project transition-all ring-1 ring-slate-100/10 h-64  backdrop-blur-lg flex flex-col justify-between rounded-2xl`}>
                      <div className="p-4 flex flex-col flex-start grow">
                        <p className="text-md md:text-xl pb-1  font-semibold text-white">{project.title}</p>
                        <p className=" place-items-center text-white  ring-1 ring-slate-100/10 rounded-xl font-mono px-2 pt-1  w-min text-xs">{project.lang}</p>
                        <p className="pt-1 text-gray-400">{project.description}</p>
                      </div>
                      <div className="relative">
                      <div className={`ring-1 ring-slate-100/20 absolute bottom-0 right-0 m-8 w-min p-2 rounded-full transition-all duration-300 ${hover == index ? 'sm:bg-[#111111] sm:rotate-[-45deg] sm:scale-125' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-5 h-5 duration-300 transition-all ${hover == index ? 'sm:scale-75' : ''}`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )
          }).reverse()}
          </div>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${hidden ? 'hidden' : 'block'} overflow-hidden fixed bg-[#00000090] justify-center flex flex-col items-center backdrop-blur rounded-2xl  top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 absolute right-4 top-4 cursor-pointer" onClick={() => closeModal()}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          <h2 className="mt-20 font- text-5xl font-extrabold align-left text-center "><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{edit ? 'Update Project' : 'New Project'}</span></h2>
          <div className="flex text-white flex-col gap-6  w-[90%] lg:w-[600px]">
            <div className="flex flex-col mt-20">
              <label for="title">Project Title</label>
              <input name="title" className="bg-black border-[1px] border-slate-100/10 rounded-md p-2 mt-2 outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label for="language">Language</label>
              <input name="language" className="bg-black border-[1px] border-slate-100/10 rounded-md p-2 mt-2 outline-none" value={lang} onChange={(e) => setLang(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label for="description">Description</label>
              <textarea name="description" className="bg-black border-[1px] border-slate-100/10 rounded-md p-2 mt-2 outline-none" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label for="repo">Github Repo</label>
              <input name="repo" className="bg-black border-[1px] border-slate-100/10 rounded-md p-2 mt-2 outline-none" value={repo} onChange={(e) => setRepo(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label for="demo">Demo</label>
              <input name="demo" className="bg-black border-[1px] border-slate-100/10 rounded-md p-2 mt-2 outline-none" value={demo} onChange={(e) => setDemo(e.target.value)}/>
            </div>
          </div>
          <div className="flex justify-center m-16">
            <a className="proj-btn btn-glow text-md font-semibold" onClick={edit ? update : handleSubmit} >{edit ? 'Update' : 'Submit'}</a>
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
