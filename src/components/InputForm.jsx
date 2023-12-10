import { useState } from 'react'
import classes from './InputForm.module.scss'
const InputForm =(props)=>{
    const [formValue,setFormValue] = useState('')
    const handleChange = (event)=>{
        setFormValue(event.target.value)
    }
    
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        props.setName(formValue)
        setFormValue('')
        console.log(formValue);
    }
 
    return (
        <form onSubmit={formSubmitHandler} className={`flex flex-row  justify-center gap-x-5 my-4 items-center text-3xl`}>
            <input value={formValue} onChange={handleChange} className={`px-2 py-2 rounded-2xl text-center text-black`} name="name" placeholder="Enter Your Name"></input>
            <button type='submit' className={`bg-green-600 px-4 py-2 font-bold rounded-2xl`}>Set Name</button>
           
        </form>
        
    )
}
export default InputForm;