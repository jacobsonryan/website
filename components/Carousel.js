import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import mongo from '../assets/mongo.svg'
import next from '../assets/next.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwindcss.svg'
import node from '../assets/node.svg'
import cypress from '../assets/cypress.svg'

const icons = [
 {  name: html, height: 75 },
 {  name: mongo, height: 75 },
 {  name: next, height: 125 },
 {  name: node, height: 75 },
 {  name: css, height: 75 },
 {  name: react, height: 75 },
 {  name: tailwind, height: 125 },
 {  name: cypress, height: 50 },
]

export default function Carousel() {
  return (
    <div id="skills">
    {/* <div className="divider p-8"></div> */}
    {/* <h2 className="mt-20 font-  text-5xl font-extrabold align-left text-center mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Technical Skills</span></h2> */}
    {/* <p className="text-xs md:text-xs  tracking-widest  text-gray-400 text-center font-semibold uppercase">Some technologies I use on a daily basis</p> */}
    <div className="carousel" >
      <Marquee
        gradient={true}
        speed={30}
        gradientColor={[0,0,0]}
      >
      {icons.map(icon => {
        return <div className="content brightness-50  grayscale-[1] hover:filter-none cursor-pointer"><Image src={icon.name} height={icon.height}  /></div>
      })}
      </Marquee>
    </div>
    </div>
  )
}
