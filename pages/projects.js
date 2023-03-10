import { PrismaClient } from "@prisma/client"
import { motion } from 'framer-motion'
import { useState } from "react"

const prisma = new PrismaClient

const filters = ['All', 'React', 'Javascript', 'C']

export default function Portfolio({ projects }) {
  const [filtered, setFiltered] = useState(projects)
  const [selected, setSelected] = useState(filters[0])

  const handleFilter = (language) => {
    if(language == 'All') {
      setFiltered(projects)
      setSelected(language)
    } else {
      setFiltered(projects.filter((project) => project.lang.includes(language)))
      setSelected(language)
    }
  } 
  return (
    <>
      <div  className="projects">
      <main className="h-full lg:h-screen"> 
        <div className="flex flex-col justify-center items-center">
        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: "easeOut"}} className="text-6xl pb-32 font-extrabold mt-40 text-center">Personal Projects</motion.h1>
        <div className="flex flex-col justify-center items-center ">
        {/* <div className="flex cursor-pointer gap-4"> */}
        {/*   {filters.map(filter => { */}
        {/*       return ( */}
        {/*         <a target="_blank" onClick={() => handleFilter(filter)} className={`${selected == filter ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}> */}
        {/*              {filter}  */}
        {/*         </a> */}
        {/*       )  */}
        {/*   })} */}
        {/* </div> */}
          <motion.div  exit={{opacity:0}} className="grid grid-cols-1 gap-4 p-4 w-3/4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
            {filtered.map((project, index) => {
              return (
                <motion.div initial={{opacity: 0, y:"20px"}} animate={{opacity: 1, y: 0}} transition={{duration: 0.75, ease: "easeOut", delay: project.id * 0.1}} key={index} className={`bg-slate-800 h-56 bg-opacity-20 p-4 flex flex-col justify-between border border-gray-600 rounded-lg ${project.id == 1 ? 'order-first' : 'order-last'}`}>
                  <div>
                    <p className="text-xl font-extrabold">{project.title}</p>
                    <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-gray-100 border border-gray-600`}>{project.lang}</span>
                    <p className="text-sm md:text-sm font-normal text-gray-400 sm:text-md">{project.description}</p>
                  </div>
                  <div className=" gap-4 flex flex-end">
                      <a href={project.code} target="_blank" className="opacity-50 hover:opacity-100">Github</a>
                      <a href={project.view} target="_blank" className="opacity-50 hover:opacity-100" style={{display: project.view != '' ? 'block' : 'none'}}>Demo</a>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
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

