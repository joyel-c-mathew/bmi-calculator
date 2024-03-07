import { useState } from 'react'

import './App.css'

function App() {

  const [height, setHeight] = useState("")
  console.log(height);
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)  // to give value result
  const [bmiStatus, setBmistatus] = useState("")

  const calculatebmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2)) // to value two only want

      if (bmiValue < 18.5) {

        setBmistatus("underweight");


      }
      else if (bmiValue  >= 18.5 && bmiValue < 24.9) {

        setBmistatus("normal weight")
      }

      else if (bmiValue >= 25 && bmiValue < 29.9) {

        setBmistatus("over weight")
      }

      else{
        setBmistatus("obese")
      }

    }

    else {
    setBmi(null);
    setBmistatus("")
  }


};


return (
  <>
    <div className="bmi-calculator">

      <div className="box"></div>

      <div className="data">
        <h1>BMI CALCULATOR</h1>

        <div className="input-container">
          <label htmlFor="height">Height(cm):</label>
          <input type="text" value={height} id="height" onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div className="input-container">
          <label htmlFor="weight">Weight(kg):</label>
          <input type="text" value={weight} id="weight" onChange={(e) => setWeight(e.target.value)} />

        </div>

        <button onClick={calculatebmi}>calculate BMI</button>

        {bmi!== null &&( // bmi if not equal to null

<div className="result">

<p>your bmi  is {bmi}</p>
<p>status:{bmiStatus}</p>

</div>

        )}
      </div>
    </div>
  </>
)
}

export default App
