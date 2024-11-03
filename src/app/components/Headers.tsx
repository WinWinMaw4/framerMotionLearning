import Link from 'next/link'
import React from 'react'

const Headers = () => {
  return (
    <div className='bg-blue-800 p-5 max-w-screen text-black'>
      <div className="flex justify-between items-center">
        <div className=' font-bold text-2xl'>
            Learning Framer Motion with next js project
        </div>
        <ul className='flex space-x-4'>
            <li>
            <Link href="/">Previous</Link>
            </li>
            <li>
            <Link href="/exerciese/scroll">Next</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Headers