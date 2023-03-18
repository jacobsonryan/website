import Navbar from './Navbar'
import Footer from './Footer'
import { Raleway } from 'next/font/google'
const inter = Raleway({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

