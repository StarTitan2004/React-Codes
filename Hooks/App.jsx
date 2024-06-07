import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter, serCounter]= useState(50)

  // let counter=50

  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1  
    setCounter(counter)
  }

  return (
    <>
     <h1>Aaditya</h1>
     <h2>center value: {counter}</h2>

     <button onClick={addValue}>Add value{counter}</button>
     <br />
     <button>remove value{counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}


export default App
