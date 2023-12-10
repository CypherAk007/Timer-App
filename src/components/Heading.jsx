import classes from './Heading.module.scss'
import GradientFont from '../utility/GradientFont';

const Heading = ()=>{
    return (
        <div className={`${classes.heading} text-center font-thin mt-4 px-4 py-8 leading-8 `}>
            <h1 className={`text-8xl `}>The <GradientFont>Almost</GradientFont> Final Countdown</h1>
            <p className={`font-mono text-2xl leading-8 py-4 font-semibold`}>Stop the timer once you estimate that time is (almost)up</p>
        </div>
    )
}
export default Heading;