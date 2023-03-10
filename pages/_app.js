import Layout from "../components/Layout"
import '@/styles/globals.css'
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode={"wait"} initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
