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
      <section className="flex noisy skills justify-center items-center text-left flex-col border-t  border-zinc-700 ">
        <div className="flex w-[90%] sm:w-[65%] gap-16 flex-col  justify-center  lg:flex-nowrap">
          <div className="">
            <h2 className="mb-10 mt-10 font-semibold text-[#5954E5] align-left text-left ">About Me</h2>
            <p className="text-sm md:text-lg w-100 md:w-[75%] text-slate-400 leading-relaxed ">Hi there! My name is Ryan Jacobson, and I'm a software engineer currently working at JP Morgan Chase. I have a true passion for development, and I'm always eager to learn and grow my skillset. My goal as a developer is to create solutions that are efficient, effective, and user-friendly. When I'm not coding, I love to spend my free time exploring new technologies and brainstorming innovative ideas. If you're looking for a dedicated and enthusiastic software engineer, then look no further than me!</p>
          </div>
          <div>
            <h2 className="mt-10 font-semibold text-[#5954E5] align-left text-left mb-10">Experience</h2>
            <div className="flex flex-col">
              <ol class="relative flex sm:flex-row flex-col justify-between w-full">                  
                {jobs.map((job) => {
                  return (
                    <li class="mb-6 bg-opacity-30 w-96">            
                      <h3 class="flex items-center mb-1 text-sm lg:text-lg font-semibold text-slate-100">{job.title}</h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-slate-400">{job.date}</time>
                      <p class="mb-4 text-base text-sm lg:text-md font-normal text-slate-600">{job.company}</p>
                    </li>
                  )
                }).reverse()}
              </ol>
            </div>
            <div>
              <h2 className="mb-10 mt-10 font-semibold text-[#5954E5] align-left text-left">Technical Skills</h2>
              <Carousel />
            </div>
          </div>
        </div>
    </section>
  )
}
