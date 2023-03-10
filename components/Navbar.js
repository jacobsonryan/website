import Link from 'next/link'
import { useRouter } from 'next/router'
    
const routes = [
  {name: 'Home', link: '/'},
  {name: 'Projects', link: '/projects'},
]

  
export default function Navbar() {
  const router = useRouter()

  return (
    <main className="">
      <div className="absolute top-0 w-screen flex justify-between items-center px-9 py-4 text-sm">
        <div>
        </div>
        <div className="flex gap-4">
          {routes.map((route, index) => {
            return <Link key={index} className={`${router.pathname == route.link ? 'opacity-100' : 'opacity-50'}
            hover:opacity-100`} href={route.link}>{route.name}</Link>
          })}
        </div>
      </div>
    </main>
  )
}
