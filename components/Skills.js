import Carousel from "./Carousel"; 

const jobs = [
  {
    title: 'Associate Software Engineer II',
    date: 'January 2023',
    company: 'JP Morgan Chase'
  },
  {
    title: 'Analyst Software Engineer I',
    date: 'December 2021 - January 2023',
    company: 'JP Morgan Chase'
  },
  {
    title: 'Software Engineer Intern',
    date: 'June 2019 - December 2021',
    company: 'JP Morgan Chase'
  }
]

export default function Skills() {
  return (
    <main className="flex justify-center items-center text-left flex-col ">
      <div className="blob3"></div>
      <div className="grid_bg absolute w-screen h-screen"></div>
        <div className="flex justify-center flex-col align-middle items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl dark:text-white">Welcome to <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4CA5FF] to-[#B375F8]">My Portfolio</span></h1>
          <div className="flex w-[20%] sm:w-[60%] gap-16 mt-16 justify-center flex-wrap-reverse lg:flex-nowrap">
            <div className="w-full">
              <ol class="relative ">                  
                {jobs.map((job, index) => {
                  return (
                    <li class="mb-6 ml-6 bg-gray-800 rounded-lg p-4 bg-opacity-30">            
                        <span  class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 class="flex items-center mb-1 text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">{job.title}<span style={{display: index == 0 ? 'block' : 'none'}}class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Current</span></h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.date}</time>
                        <p class="mb-4 text-base text-sm lg:text-md font-normal text-gray-500 dark:text-gray-400">{job.company}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
          <div className="w-[20%] sm:w-[30%] md:w-[40%] lg:w-[60%]">
            <div className="flex justify-center items-center mt-16">
              <div class="sm:flex-1 w-full h-[1px] dark:bg-gray-600 bg-[#D8E5FF]"></div>
                <p class="font-normal flex-[1] ] mx-4 sm:py-0 py-4 text-center text-gray-400 text-sm lg:text-lg">Technologies I Use</p>
              <div class="sm:flex-1 w-full h-[1px] dark:bg-gray-600 bg-[#D8E5FF]"></div>
            </div>
            <Carousel />
          </div>
      </div>
  </main>
  )
}
