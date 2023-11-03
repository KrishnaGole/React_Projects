import React, {useState, useRef} from "react";

function Timer(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef();

    const startTimer = () => {
        if(!isRunning){
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIsRunning(true);
        }
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
    }

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTime(0);
        setIsRunning(false);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    }
    return (
        <div>
          <h1>Timer</h1>
          <p>{formatTime(time)}</p>
          <button onClick={startTimer} disabled = {isRunning}>Start</button>
          <button onClick={stopTimer} disabled = {!isRunning}>Stop</button>
          <button onClick={resetTimer}>Reset</button>           
        </div>
    )
}
export default Timer;