import GradientFont from "../utility/GradientFont";
import classes from './ResultModal.module.scss';
const ResultModal = ({result,targetTime,setCloseModal})=>{
    const clickHandler = ()=>{
        console.log('button Clicked');
        setCloseModal(false)
        // dialog.close()
    }
    return (
        <dialog className={`${classes.modal} z-50 overflow-hidden fixed flex flex-col text-white bg-black my-32 mx-auto w-100 text-left p-8 text-2xl `} open>
            <h2 className={` text-6xl py-4`}><GradientFont>You {result} </GradientFont></h2>
            <p className={`font-mono py-4`}>The target time was <strong>{targetTime} seconds.</strong></p>
            <p className={`font-mono py-4`}>You Stopped the timer with X seconds left.</p>
            <form className={`self-end`} method="dialog">
                <button onClick={clickHandler} autofocus type='submit' className={` bg-white text-black p-3 text-3xl `}>Close</button>
            </form>
        </dialog>
    )
}

export default ResultModal;