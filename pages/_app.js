import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from "../components/Layout"
import '@/styles/globals.css'

export default function App({ Component, pageProps, router }) {
  return (
    <UserProvider>
      <Layout>
        <Component key={router.pathname} {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
