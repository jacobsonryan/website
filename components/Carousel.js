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
    <div className="carousel" >
      <Marquee
        gradient={false}
        speed={50}
      >
      {icons.map(icon => {
        return <div className="content brightness-50  grayscale-[1] hover:filter-none cursor-pointer"><Image src={icon.name} height={icon.height}  /></div>
      })}
      </Marquee>
    </div>
  )
}
