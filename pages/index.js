import Head from 'next/head'
import Skills from '../components/Skills'
import Carousel from '../components/Carousel'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div id="home">
      <Head>
        <title>Ryan Jacobson | {router.asPath == '/' ? 'Home' : router.asPath.split("#")[1].charAt(0).toUpperCase() + router.asPath.split("#")[1].slice(1)}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section id="home" className="noisy h-screen w-screen flex items-center justify-center">
          <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] sm:mt-16 mt-32">
              <h2 className="text-white align-center md:text-xl mb-10 select-none ">Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">web portfolio </span>of</h2>
              <h1 className="text-white text-6xl xs:text-8xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight md:text-7xl lg:text-8xl select-none">Ryan
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600"> Jacobson</span></h1>
              <div>
                <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold uppercase mt-16">Scroll down to learn more about my skills & experiences</p>
                <Carousel />
              </div>
              <div className="flex gap-3 sm:gap-8 text-sm px-4 justify-center mt-10 flex-wrap lg:flex-nowrap">
                <a draggable="false" href="mailto:ryanhjacobson@gmail.com" target="_blank" class="proj-btn btn-glow text-md font-semibold w-full sm:w-[175px]">
                  Contact Me 
                  {/* <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </a>
                <a draggable="false" href="https://github.com/jacobsonryan" target="_blank" class="relative inline-flex items-center w-full sm:w-[175px] justify-center p-[1px] gh-glow  font-semibold overflow-hidden text-md font-medium text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-600 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                  <span class="relative transition-all ease-in duration-75 bg-white dark:bg-black gh-btn rounded-md group-hover:bg-opacity-0 hover:text-black">
                     Github
                  </span>
                </a>
              </div>
            {/* <div className="flex justify-center mt-10"> */}
            {/*   <Image src={mouse} width={35} className="flex justify-center"></Image> */}
            {/* </div> */}
          </div>
        </section>
        <Skills />
    </div>
  )
}
