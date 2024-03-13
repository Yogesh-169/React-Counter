import './App.css'
import {useState} from 'react'
function App() {
  let [Counter,setCounter]=useState(0)

  const addValue=() =>{
    Counter+=1
    if(Counter>20)
    {
      Counter=20
    }
    setCounter(Counter)
  }

  const remoValue=() =>{
    Counter-=1
    if(Counter<0){
      Counter=0
    }
    setCounter(Counter)
  }
  return(
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {Counter}</h2>

      <button onClick={addValue}>Add Value </button><br/>
      <button onClick={remoValue}>Remove Value</button>
    </>

  )
}

export default App
