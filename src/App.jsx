
import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultTable from "./components/ResultTable"


function App() {

   const [userInput, setUserInput] =  useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn:6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange (input, newValue) {
    setUserInput((prev) => {
     return{
       ...prev,
       [input]: +newValue
     }
    })
  }

  return (
    <main>
      <Header/>
      <UserInput state={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please input valid data</p>}
      {inputIsValid && <ResultTable inputs={userInput} />}
    </main>
  )
}

export default App
