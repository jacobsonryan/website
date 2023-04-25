import Navbar from './Navbar'
import Footer from './Footer'
import { Inter } from 'next/font/google'
const urbanist = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={urbanist.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

