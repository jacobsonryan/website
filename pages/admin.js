import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import axios from "axios"
import { useState } from "react"
import ResumeUpload from '../components/ResumeUpload'

export default function Admin() {
  return (
    <>
      <div className="flex justify-center flex-col">
        <ResumeUpload />
        <div className="flex justify-center m-16">
          <a className="proj-btn btn-glow text-md font-semibold" href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
