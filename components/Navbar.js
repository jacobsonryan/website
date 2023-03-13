import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
    
const routes = [
  {name: 'Home', link: '/'},
  {name: 'Projects', link: '/projects'},
]

  
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className="fixed top-0 bg-slate-900 bg-opacity-30 backdrop-blur md:bg-opacity-0 md:backdrop-blur-[0] md:sticky z-10">
      <div className=" w-screen flex justify-between items-center px-9 py-4 text-sm">
        <div className="font-extrabold uppercase text-xl">
          <h1>Ryan <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4CA5FF] to-[#B375F8]">Jacobson</span></h1>
        </div>
        <div className="cursor-pointer block md:hidden" onClick={() => setOpen(!open)}>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="invert">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
          </svg>
        </div>
        <div className="gap-9 md:flex hidden">
          {routes.map((route, index) => {
            return <Link key={index} className={`${router.pathname == route.link ? 'opacity-100' : 'opacity-50'}
            hover:opacity-100`} href={route.link}>{route.name}</Link>
          })}
        </div>
      </div>
      <div className={`${open ? 'block' : 'hidden'} flex py-4 gap-2 px-9 flex-col text-right`}>
        {routes.map((route, index) => {
          return <Link key={index} className={`${router.pathname == route.link ? 'opacity-100' : 'opacity-50'}
          hover:opacity-100`} href={route.link} onClick={() => setOpen(false)} >{route.name}</Link>
        })}
      </div>
    </nav>
  )
}
