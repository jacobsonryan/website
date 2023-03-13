import Navbar from './Navbar'
import Footer from './Footer'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

