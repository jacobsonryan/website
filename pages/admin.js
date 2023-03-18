import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Admin({ data }) {
  return (
    <>
      <div>Sup beast</div>
      <a href="/api/auth/logout">Logout</a>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/projects')
    const data = await res.json()
    return { props: { data } }
  }
})
