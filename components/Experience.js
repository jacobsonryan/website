import { useEffect } from 'react'
import hljs from "highlight.js";

export default function Experience() {

  useEffect(() => {
    hljs.highlightAll()
  })


  const jobs = [
    {
      id: 3,
      code: `const job = {\n \ttitle: "Software Engineer II",\n \tfrom: "January 2023"\n \tto: null, \n \tcompany: "JP Morgan Chase"\n}`
    },
    {
      id: 2,
      code: `const job = {\n \ttitle: "Software Engineer I",\n \tfrom: "December 2021"\n \tto: "December 2022", \n \tcompany: "JP Morgan Chase"\n}`
    },
    {
      id: 1,
      code: `const job = {\n \ttitle: "Software Engineer Intern",\n \tfrom: "June 2019"\n \tto: "December 2021", \n \tcompany: "JP Morgan Chase"\n}`
    },
  ]

  return (
    <div id="experience">
      <div className="divider p-8"></div>
      <h2 className="mt-20 font- text-5xl font-extrabold align-left text-center mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Experience</span></h2>
      <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold uppercase mb-10">The positions I have worked in my career so far</p>
        <div className="absolute timeline w-screen">
          <div class={` absolute w-3 h-3 bg-black  mt-[137.5px] rounded-full mt-1.5  z-[3] border-[2px] border-[#ffffff30] dark:bg-[black] hidden lg:block`}></div>
          <div class={` absolute w-3 h-3 bg-black  mt-[412.5px] rounded-full mt-1.5  z-[3] border-[2px] border-[#ffffff30] dark:bg-[black] hidden lg:block`}></div>
          <div class={` absolute w-3 h-3 bg-black  mt-[687.5px] rounded-full mt-1.5  z-[3] border-[2px] border-[#ffffff30] dark:bg-[black] hidden lg:block`}></div>
        </div>
              {/* <div className="blob5"></div> */}
        <ol className="mb-40 ">
          {jobs.map((job, i) => {
            return (
              <div className="relative flex lg:flex-col flex-col justify-between my-4 md:my-4 lg:my-0">
              <div className={`sep absolute ${i == 2 ? 'top-[137.5px]' : 'top-0'} ${i == 0 ? ' h-[137.5px]' : ''} hidden sm:block`}></div>
              <div className={`sep2 absolute ${i !== 2 ? 'opacity-0' : 'opacity-1'}`}></div>
              <div className={`sep3 absolute ${i !== 0 ? 'opacity-0' : 'opacity-1'}`}></div>
                {/* <div class=" -top-px left-20 right-11 h-px bg-gradient-to-r  from-blue-500/0 via-blue-500 to-teal-500/0"></div> */}
                <li class={`bg-opacity-0 experience   backdrop-blur-lg bg-gray-800  ring-1 lg:w-[45%] w-full ring-slate-100/10 rounded-md sm:h-[275px] h-[200px] ${i == 1 ? 'sm:self-end' : 'sm:self start'} self-start`}>            
                  <div className="flex gap-2 align-middle items-center border-b border-[#ffffff20] px-4">
                    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-[8px] sm:h-2.5 w-auto stroke-slate-500/30 ">
                      <circle cx="5" cy="5" r="4.5"></circle>
                      <circle cx="21" cy="5" r="4.5"></circle>
                      <circle cx="37" cy="5" r="4.5"></circle>
                    </svg>
                    <div className="flex">
                      {jobs.map((job, idx) => {
                        return (
                            <code className={`cursor-pointer px-1 py-3  text-[8px] sm:text-xs sm:px-3   border-[1px] border-[#ffffff20] border-l-[#00000000] ${i == idx ? 'border-b-black' : 'border-b-[#ffffff00] '} ${job.id == 1 ? 'ml-2 border-l-[#ffffff20]' : ''} border-t-black relative top-[0.07em]  flex justify-between gap-1 place-items-center`}>
                              <p className={`${i == idx ? '' : 'text-[#ffffff30]'}`}>job-{job.id}.js</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-3 h-3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </code>
                        )
                      }).reverse()}
                    </div>
                  </div>
                  <div className="p-4 h-[60%] ">
                    <div className="flex">
                      <div className="pr-4 pt-[1px]  flex flex-col gap-9">
                        <code className="text-xs xs:text-lg sm:text-lg">
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>4</p>
                          <p>5</p>
                          <p>6</p>
                          {/* <p>7</p> */}
                        </code>
                      </div>
                      <pre><code className="language-javascript text-xs xs:text-lg sm:text-lg">{job.code}</code></pre>
                    </div>
                  </div>
                </li>
                {/* <div class=" -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-500/0 via-blue-500 to-teal-500/0"></div> */}
              </div>
            )
          }).reverse()}
        </ol>
    </div>
  )
}
