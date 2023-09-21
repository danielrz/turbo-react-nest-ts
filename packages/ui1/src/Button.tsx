import * as React from 'react'
import { useState } from 'react'

function Button() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-auto antialiased text-center">
        <header className=" bg-dark-2 min-h-screen flex flex-col items-center justify-center text-2xl text-purple-500">
          Button component
        </header>
        <button className='bg-cyan-500 hover:bg-cyan-700 h-16 w-16' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export { Button }
