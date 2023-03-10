import Marquee from 'react-fast-marquee'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si'

const icons = [
  <AiFillHtml5 />,
  <FaCss3Alt />,
  <FaReact />,
  <IoLogoJavascript />,
  <SiNextdotjs />,
  <SiTailwindcss />,
  <SiPostgresql />,
  <SiMongodb />
]

export default function Carousel() {
  return (
    <div className="carousel" >
      <Marquee
        gradient={false}
        speed={20}
      >
      {icons.map(icon => {
        return <div className="content">{icon}</div>
      })}
      </Marquee>
    </div>
  )
}
