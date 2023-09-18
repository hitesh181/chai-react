import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl p-4 bg-red-800 font-bold underline">
      Hello world!
    </h1>
    <Header/>
    </>
  )
}

export default App
