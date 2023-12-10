import TimerCard from "./TimerCard";
import classes from './TimerSection.module.scss'
const TimerSection = ()=>{
    return(
        <ol className={`flex flex-wrap `}>
            <TimerCard text='Easy' timerText='1 second' sec='1'></TimerCard>
            <TimerCard text='Not Easy' timerText='5 second' sec='5'></TimerCard>
            <TimerCard text='Getting Tough' timerText='10 second' sec='10'></TimerCard>
            <TimerCard text='Pros only' timerText='15 second' sec='15'></TimerCard>
        </ol>
    )
}
export default TimerSection;