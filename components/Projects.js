// import prisma from ".././lib/prisma"
import { useState, useEffect } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [hover, setHover] = useState("")
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
      })
  }, [])

  const handleMouseEnter = (i) => {
    setHover(i)
  }

  const handleMouseLeave = () => {
    setHover()
  }

  return (
    <>
      <div id="projects">
      <div id="proj-div" className="divider p-8"></div>
      <div className="flex flex-col justify-center items-center overflow-hidden noisy">
      <h2 className=" mt-20  text-5xl font-extrabold align-left text-center mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">Featured Projects</span></h2>
      <p className="text-xs md:text-xs  tracking-widest  text-gray-400 text-center font-semibold uppercase mb-10 w-[90%]">Here are some of the most recent projects I have been working on</p>
        <div className="grid grid-cols-1 gap-4 p-4 w-[80%] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
          {projects.map((project, index) => {
            return (
              <a href={project.view ? project.view : project.code} target="__blank" key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} className={`${project.id == 1 ? 'md:col-span-2' : ''} ${project.id == 1 ? 'order-first' : ''}`}>
                <div className={`cursor-pointer hover:ring-slate-100/30 duration-200 project transition-all ring-1 ring-slate-100/10 h-64  backdrop-blur-lg flex flex-col justify-between rounded-2xl`}>
                    <div className="p-4 flex flex-col flex-start grow">
                      <p className="text-md md:text-xl pb-1  font-semibold text-white">{project.title}</p>
                      <p className="relative transition-all ease-in duration-75 text-white bg-[#111111] rounded-xl px-3 py-[1px]  w-min text-xs">{project.lang}</p>
                      <p className="  pt-1 text-gray-400">{project.description}</p>
                    </div>
                    <div className="relative">
                    <div className={`ring-1 ring-slate-100/20 absolute bottom-0 right-0 m-8 w-min p-2 rounded-full transition-all duration-300 ${hover == index ? 'sm:bg-[#111111] sm:rotate-[-40deg] sm:scale-125' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-5 h-5 duration-300 transition-all ${hover == index ? 'sm:scale-75' : ''}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

// export async function getServerSideProps() {
//   const projects = await prisma.project.findMany()
//   return {
//     props: {
//       projects
//     }
//   }
// }

