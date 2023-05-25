import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import git from '../assets/git.svg'
import html from '../assets/html.svg'
import next from '../assets/next.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwindcss.svg'
import vercel from '../assets/vercel.svg'
import node from '../assets/node.svg'
import cypress from '../assets/cypress.svg'
import heroku from '../assets/heroku.svg'
import auth0 from '../assets/auth0.svg'
import prisma from '../assets/prisma.svg'

const icons = [
 {  name: html, height: 65 },
 {  name: next, height: 90 },
 // {  name: node, height: 60 },
 {  name: react, height: 55 },
 {  name: tailwind, height: 100 },
 {  name: cypress, height: 40 },
 {  name: vercel, height: 110 },
 {  name: auth0, height: 45 },
 {  name: prisma, height: 30 },
 {  name: git, height: 40 },
 {  name: heroku, height: 60 },
]

export default function Carousel() {
  return (
    <div id="skills">
    {/* <div className="divider p-8"></div> */}
    {/* <h2 className="mt-20 font-  text-5xl font-extrabold align-left text-center mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Technical Skills</span></h2> */}
    {/* <p className="text-xs md:text-xs  tracking-widest  text-gray-400 text-center font-semibold uppercase">Some technologies I use on a daily basis</p> */}
    <div className="carousel select-none" >
      <Marquee
        gradient={true}
        speed={30}
        gradientColor={[0,0,0]}
      >
      {icons.map(icon => {
        return <div className={`content  grayscale-[1] `}><Image draggable="false" src={icon.name} height={icon.height} /></div>
      })}
      </Marquee>
    </div>
    </div>
  )
}
