import { useState } from 'react'
import './App.css'

function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const generateNumber = (range) => {
          return(Math.floor(Math.random()*range));
  }
  
  return (
    <div>
        <h1>BRAINYSID</h1>
        {console.log("intro")}
        <input
          type="text"
          placeholder="enter the length of the first number"
          onChange={(e) => { setFirstNumber(generateNumber(e.target.value))}}
          />
         <br />
          <input
          type="text"
          placeholder="enter the length of the second number"
          onChange={(e) => { setSecondNumber(generateNumber(e.target.value))}}
          />
          <br />
          <input type="submit"
           />

           <input type="text"
           value={ firstNumber } />
           <br />
           <input type="text"
           value={ secondNumber } />
           <div> {firstNumber ? firstNumber : "enter the range"} </div>
           <div> {secondNumber ? secondNumber : "enter the range"} </div>

           
    </div>
  )
}

export default App
