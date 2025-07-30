import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [time, setTime] = useState('');
  const [timerInt, setTimerInt] = useState(0);

  useEffect( () => {
    // prevent duplicate timers
    // clearInterval(timerInt);
    let timerIntTemp;
    if(timerInt === 0){
      timerIntTemp = setInterval( () => {
        const curr = new Date();
        const str = curr.getHours() + ":" + curr.getMinutes() + ":" + curr.getSeconds();
        setTime(str);
      }, 500)
      setTimerInt(timerIntTemp);
    }
    console.log(timerInt);
    return(() => {
      // react strict mode will render a component twice
      // this will run at unmount and will clear the interval if not safely cleared out by your button
      console.log("clearing");
      clearInterval(timerIntTemp)
    })
  }, [])

  const handleClick = () => {
    console.log(timerInt);
    clearInterval(timerInt);
    setTimerInt(-1);
    setTime("Timer Stopped");
  }

  return (
    <>
      <h1>Questions {time} </h1>
      <button onClick={handleClick}>Stop Timer</button>
    </>
  )
}

export default App
