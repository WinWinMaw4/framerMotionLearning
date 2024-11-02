import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const page = () => {
  return (
    <div>
       <main className="text-7xl font-bold font-mono flex min-h-screen justify-center flex-col items-center p-4">
        <div>Win Win Maw Framer Motion</div>
       <AnimatedCounter from={0} to={500} />

        </main>
    </div>
  )
}

export default page