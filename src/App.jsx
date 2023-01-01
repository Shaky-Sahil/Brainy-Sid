import { useState } from 'react'
import './App.css'

function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result , setResult ] = useState(0);

  const generateNumber = (range) => {
          return(Math.floor(Math.random()*range));
  }

  const checkAnswer = (ans) => {
          setResult((result) => result = firstNumber*secondNumber);
  }

  const calcResult = (firstNumber, secondNumber) => {
                  setResult((result) => result = firstNumber*secondNumber);

  }
  
  return (
    <div>
        <h1>BRAINYSID</h1>
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
           <div> {firstNumber ? firstNumber : "enter the range"} </div>
           <div>X</div>
           <div> {secondNumber ? secondNumber : "enter the range"} </div>
          
          <br />
          <div>{result}</div>

            <input type="text"
            placeholder='answer'
            onChange={(e) => {checkAnswer(firstNumber,secondNumber)}} />
           
    </div>
  )
}

export default App
