import { useState } from "react";
import { useRef } from "react";
import Card from "./Card";
import classes from './TimerCard.module.scss';
import ResultModal from "./ResultModal.jsx";
const TimerCard = ({text,timerText,sec})=>{
    const timer = useRef();
    const [timerStarted ,setTimerStarted] = useState(false)
    const [timerExpired,setTimerExpired] = useState(false)
    const [closeModal,setCloseModal] = useState(true)
    const handleStart = ()=>{
        timer.current = setTimeout(()=>{
            setTimerStarted(false)
            setTimerExpired(true)
        },sec*1000)
        setTimerStarted(true)
    }

    const handleStop = ()=>{
        clearTimeout(timer.current)
    }

      
    return(
        <>
        {timerExpired && closeModal && <ResultModal setCloseModal={setCloseModal} result={'won'} targetTime={sec}></ResultModal>}
        <li className={`flex-50  py-8 px-16 `}>
            <div className={`${classes.card} flex flex-col items-center justify-center font-mono text-2xl`}>
                <h2 className={` mt-12 my-6 font-semibold text-4xl`}>{text}</h2>
                <div className={`border-solid border-2  border-black px-4 py-2 mb-12 `}>{timerText}</div>
               
                <button className={`bg-black text-white p-3 px-5 rounded-lg`} onClick={timerStarted?handleStop:handleStart}>{timerStarted ?'Stop Challenge':'Start Challenge'}</button>
                <div className={`my-4 mb-12 text-3xl `}>
                    {!timerStarted? 'Timer inactive':'Time is running..'}
                </div>
            </div>
           
        </li>
        </>
    )
}
export default TimerCard;