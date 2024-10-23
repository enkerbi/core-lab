import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Welcome from './WElcome'
import StyledButton from'./StyleButton.jsx'
import Counter from './Counter.jsx'


function App() {
  const [count, setCount] = useState(0)
  const students = [
		{name: "lily", score: 80},
		{name: "jay", score: 50},
		{name: "kat", score: 85},
	]

  return (
    <>
      <div>
      {students.map((student, index) => (
        <Welcome key={index} name={student.name} score={student.score}/>
      ))}
        <Welcome name="lily"> </Welcome>
        <Welcome name="stinki"></Welcome>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
