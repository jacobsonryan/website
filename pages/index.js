import Head from 'next/head'
import Link from 'next/link'
import Skills from '@/components/Skills'
import React, { useRef } from 'react'

export default function Home() {
  const titleRef = useRef();

  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="flex justify-center items-center text-left flex-col ">
        <div className=" w-screen h-screen md:h- text-lg flex justify-center align-middle items-center">
          <div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: "easeOut"}} className="flex justify-around w-[75%] gap-4 flex-row align-middle items-center">
          <div className="blob"></div>
          <div className="grid_bg absolute w-screen h-screen"></div>
          <div className="grid_fade absolute w-screen h-screen"></div>
            <div className="mb-[100px]">
              <p className="text-sm font-mono ">Welcome to the web portfolio of</p>
              <h1 className="mb-1 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-8xl dark:text-white">Ryan<br></br> <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4CA5FF] to-[#B375F8]">Jacobson</span></h1>
              <p className="text-sm md:text-md w-100 md:w-[55%] pt-4 font-mono text-gray-500">"Welcome to my portfolio website, where you can discover my expertise in web development. From responsive design to seamless functionality, I'm dedicated to delivering websites that enhance your digital presence. I'm excited to showcase my work and connect with you about your next project." -ChatGPT</p>
              <Link href="/projects" class="inline-flex items-center text-md pt-4">
               Projects 
              <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
            </div>
          </div>
        </div>
        </main>
      <div ref={titleRef}>
        <Skills />
      </div>
    </>
  )
}
