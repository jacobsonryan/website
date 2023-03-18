import prisma from "../lib/prisma"

export default function Projects({ projects }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden noisy">
      <div className="grid_bg absolute w-screen h-full "></div>
      <div className="grid_fade absolute w-screen h-full"></div>
      <div className="blob2"></div>
      <h1 className="text-2xl md:text-3xl lg:text-6xl pb-24 font-extrabold mt-40 text-center">Personal Projects</h1>
        <div className="grid grid-cols-1 gap-4 p-4 w-[80%] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
          {projects.map((project, index) => {
            return (
              <div key={index} className={`bg-gray-800 h-64 bg-opacity-10 backdrop-blur-lg flex flex-col justify-between ring-1 ring-slate-100/10   ${project.id == 1 ? 'order-first' : 'order-last'}`}>
                <div className="flex gap-2 align-middle items-center px-4 pt-4">
                  <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
                    <circle cx="5" cy="5" r="4.5"></circle>
                    <circle cx="21" cy="5" r="4.5"></circle>
                    <circle cx="37" cy="5" r="4.5"></circle></svg>
                </div>
                <div className="p-4 pt-2 flex flex-col flex-start grow">
                  <p className="text-md md:text-xl pb-1  font-semibold">{project.title}</p>
                  <span className={`text-xs w-min font-medium mr-2 px-2.5 p-0.5  ring-1 ring-slate-100/10`}>{project.lang}</span>
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
    </>
  )
}

export async function getServerSideProps() {
  const projects = await prisma.project.findMany()
  return {
    props: {
      projects
    }
  }
}

