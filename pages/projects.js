import prisma from "../lib/prisma"

export default function Projects({ projects }) {
  return (
    <>
      <div  className="projects">
      <main className="h-full lg:h-screen"> 
        <div className="flex flex-col justify-center items-center">
        <div className="blob"></div>
        <div className="grid_bg_proj absolute w-screen h-screen"></div>
        <div className="grid_fade absolute w-screen h-screen"></div>
        <h1 className="text-2xl md:text-3xl lg:text-6xl pb-32 font-extrabold mt-40 text-center">Personal Projects</h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 gap-4 p-4 w-3/4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
            {projects.map((project, index) => {
              return (
                <div key={index} className={`bg-slate-900 h-56 bg-opacity-30 backdrop-blur-sm p-4  flex flex-col justify-between border border-gray-600 rounded-lg  ${project.id == 1 ? 'order-first' : 'order-last'}`}>
                  <div>
                    <p className="text-xl font-extrabold">{project.title}</p>
                    <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-gray-100 border border-gray-600`}>{project.lang}</span>
                    <p className="text-sm md:text-sm font-normal text-gray-400 sm:text-md">{project.description}</p>
                  </div>
                  <div className=" gap-4 flex flex-end">
                      <a href={project.code} target="_blank" className="opacity-50 hover:opacity-100">Github</a>
                      <a href={project.view} target="_blank" className="opacity-50 hover:opacity-100" style={{display: project.view != '' ? 'block' : 'none'}}>Demo</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
          </div>
      </main>
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

