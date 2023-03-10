import Carousel from "./Carousel";

export default function Skills() {
  return (
  <main className="flex skills justify-center items-center text-left flex-col ">
    <div className=" w-screen h-screen md:h- text-lg flex justify-center align-middle items-center divider-y-2">
      <div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: "easeOut"}} className="flex justify-center flex-col align-middle items-center">
        <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4CA5FF] to-[#B375F8]">My Portfolio</span></h1>
        <div className="flex w-[60%] gap-16 mt-32 justify-center">
          <div className="w-2/4">
            <p className="mb-3 font-light text-gray-500 dark:text-gray-400  text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis vehicula, vulputate turpis at, cursus neque. Aliquam ex orci, tempor id tincidunt fermentum, porttitor quis neque. Nulla facilisi. Suspendisse tortor turpis, interdum in tellus eget, tincidunt faucibus orci. Ut bibendum justo at enim blandit euismod. Vivamus pharetra risus lacus, eget ornare lorem consectetur et. Nam et ex mauris. Suspendisse posuere rhoncus nisl, nec vulputate metus viverra ac. Nulla accumsan massa et pulvinar posuere. </p>
          </div>
            <div className="w-2/4">
              <ol class="text-right relative">                  
                  <li class="mb-10 ml-4">
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2023 - Present</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Associate Software Engineer II</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">JP Morgan Chase</p>
                  </li>
                  <li class="mb-10 ml-4">
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2021 - December 2022</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Analyst Software Engineer I</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">JP Morgan Chase</p>
                  </li>
                  <li class="ml-4">
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2019 - December 2021</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">JP Morgan Chase</p>
                  </li>
              </ol>
            </div>
          </div>
          <div className=" w-[60%]">
            <div className="flex justify-center items-center ">
            <div class="sm:flex-1 w-full h-[1px] dark:bg-gray-600 bg-[#D8E5FF]"></div>
            <p class="font-normal flex-[.5] ] mx-4 sm:py-0 py-4 text-center">Tech I Use</p>
            <div class="sm:flex-1 w-full h-[1px] dark:bg-gray-600 bg-[#D8E5FF]"></div>
            </div>
            <Carousel />
          </div>
      </div>
    </div>
  </main>
  )
}
