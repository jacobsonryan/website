// import prisma from ".././lib/prisma"
import { useState, useEffect } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
      })
  }, [])
  return (
    <>
      <div id="projects">
      <div id="proj-div" className="divider p-8"></div>
      <div className="flex flex-col justify-center items-center overflow-hidden noisy">
      <h2 className=" mt-20  text-5xl font-extrabold align-left text-center mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">Projects</span></h2>
      <p className="text-xs md:text-xs  tracking-widest  text-gray-400 text-center font-semibold uppercase mb-10">Here are some of the most recent projects I have been working on</p>
        <div className="grid grid-cols-1 gap-4 p-4 w-[90%] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
          {projects.map((project, index) => {
            return (
              <div key={index} className={`bg-gray-800 h-64 bg-opacity-0 backdrop-blur-lg flex flex-col justify-between ring-1 ring-slate-100/10   ${project.id == 1 ? 'order-first' : 'order-last'} rounded-md`}>
                <div className="flex gap-2 align-middle items-center px-4 pt-4">
                  <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
                    <circle cx="5" cy="5" r="4.5"></circle>
                    <circle cx="21" cy="5" r="4.5"></circle>
                    <circle cx="37" cy="5" r="4.5"></circle></svg>
                </div>
                <div className="p-4 pt-2 flex flex-col flex-start grow">
                  <p className="text-md md:text-xl pb-1  font-semibold text-white">{project.title}</p>
                    <p className="relative transition-all ease-in duration-75 text-white bg-gray-700 rounded-xl px-2  w-min text-xs">{project.lang}</p>
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

