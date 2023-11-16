import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState("pink")

  return (
    <div className=' w-full h-screen' style={{ backgroundColor: colour }}>
      <h1 className='flex flex-wrap justify-center p-5 mt-52'>Let's Change The Background Colour</h1>
      <div className='flex flex-row flex-wrap m-3 justify-center bg-black border rounded-md  m-auto'>
        <button style={{ backgroundColor: `red` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg'
          onClick={() => setColour("red")}>red</button>
        <button style={{ backgroundColor: `green` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg' onClick={() => setColour("green")}>green</button>
        <button style={{ backgroundColor: `purple` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg' onClick={() => setColour("purple")}>purple</button>
        <button style={{ backgroundColor: `blue` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg' onClick={() => setColour("blue")}>blue</button>
        <button style={{ backgroundColor: `yellow` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg'onClick={() => setColour("yellow")}>yellow</button>
        <button style={{ backgroundColor: `olive` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg' onClick={() => setColour("olive")}>olive</button>
        <button style={{ backgroundColor: `gray` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg' onClick={() => setColour("gray")}>gray</button>
        <button style={{ backgroundColor: `orange` }} className=' hover:font-bold border rounded-md p-1 text-black font-semibold w-24 m-3 text-lg' onClick={() => setColour("orange")}>orange</button>
      </div>
    </div>
  )
}

export default App
