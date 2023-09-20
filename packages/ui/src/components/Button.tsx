import { useState } from 'react'
// import '../index.css'

function Button() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-auto antialiased text-center">
        <header className="bg-blue-100 min-h-screen flex flex-col items-center justify-center text-2xl text-pink-300">
          Button component
        </header>
        <button className='bg-blue-500 hover:bg-blue-700 h-16 w-16' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Button
