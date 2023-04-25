import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
    
const routes = [
  {name: 'Home', link: '/'},
  {name: 'Experience', link: '/#experience'},
  {name: 'Projects', link: '/#projects'},
  {name: 'Resume', link: '/#resume'}
]
  
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = () => {
  }


  return (
    <nav onScroll={handleScroll} className="nav sticky top-0 bg-black bg-opacity-10  backdrop-blur z-10">
      <div className=" w-screen flex justify-between items-center px-9 py-4 text-sm">
        <div className="font-extrabold uppercase text-xl">
          <h1>Ryan<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500"> Jacobson</span></h1>
        </div>
        <div className="cursor-pointer block md:hidden" onClick={() => setOpen(!open)}>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="invert">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
          </svg>
        </div>
        <div className="gap-9 md:flex hidden font-semibold">
          {routes.map((route, index) => {
            return <Link key={index} onClick={handleClick()} className={`${router.asPath.substring(1) == route.link ? 'text-white' : 'text-gray-400'} hover:text-white`} href={route.link}>{route.name}</Link>
          })}
        </div>
      </div>
      <div className={`${open ? 'block' : 'hidden'} bg-black bg-opacity-20 backdrop-blur absolute md:hidden  flex py-6 gap-6 px-9 flex-col text-left right-1 top-[65px] rounded-md ring-1 ring-slate-100/10  z-10`}>
        {routes.map((route, index) => {
          return <Link key={index} className={`${router.asPath.substring(1) == route.link ? 'text-white' : 'text-gray-400'}
          hover:text-white`} href={route.link} onClick={() => setOpen(false)} >{route.name}</Link>
        })}
      </div>
        <div class={`${clientWindowHeight !== 0 ? 'opacity-1' : 'opacity-0'} -top-px left-20 right-11 h-px bg-[#ffffff20] transition-all duration-300`}></div>
    </nav>
  )
}
