import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="flex welcome justify-center items-center text-left flex-col ">
        <div className=" w-screen h-screen md:h- text-lg flex justify-center align-middle items-center">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: "easeOut"}} className="flex justify-center flex-col align-middle items-center">
            <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ryan <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4CA5FF] to-[#B375F8]">Jacobson</span></h1>
            <p class="mb-3 font-light text-sm text-center text-gray-500 dark:text-gray-400">Full Stack Developer | Software Engineer | Automation Engineer</p>
            <Link href="/projects"  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Projects</Link>
          </motion.div>
        </div>
        </main>
        <Skills />
    </>
  )
}
