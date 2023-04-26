import Head from 'next/head'
import Skills from '../components/Skills'
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
        <section className="noisy h-screen w-screen flex items-center justify-center">
          <div className="text-lg lg: text-center w-[90%] md:w-[60%] mb-[150px] ">
              <h2 className="text-white align-center md:text-xl mb-8">Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold ">web portfolio </span>of</h2>
              <h1 className="text-white text-6xl xs:text-8xl font-extrabold leading-none tracking-tight md:text-8xl lg:text-9xl mb-8">Ryan<br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Jacobson</span></h1>
              <p className="text-sm md:text-xl w-100 text-gray-400">Welcome to my website, where you can discover my expertise in web development. From responsive design to seamless functionality, I'm dedicated to delivering websites that enhance your digital presence. I'm excited to showcase my work and connect with you about your next project!</p>
              <div className="flex gap-4 mt-8  text-sm justify-center">
                <a href="mailto:ryanhjacobson@gmail.com" target="_blank" class="flex items-center proj-btn btn-glow text-md font-semibold">
                  Contact Me 
                  {/* <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </a>
                <a href="https://github.com/jacobsonryan" target="_blank" class="relative inline-flex items-center justify-center p-[1px] gh-glow  font-semibold overflow-hidden text-md font-medium text-gray-900 rounded-md group bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                  <span class="relative transition-all ease-in duration-75 bg-white dark:bg-black gh-btn rounded-md group-hover:bg-opacity-0 hover:text-black">
                     Github
                  </span>
                </a>
              </div>
          </div>
        </section>
        <Skills />
    </div>
  )
}
