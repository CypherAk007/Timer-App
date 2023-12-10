import { useEffect, useState } from "react";
import GradientFont from "../utility/GradientFont";
import InputForm from "./InputForm";
import classes from './Name.module.scss'
const Name = ()=>{
    const [name,setName]=useState('')
    const [submitted,setSubmitted] = useState(false)
    
    return (
        <div className={`${classes.name} text-2xl`}>
            <h2 className={`text-5xl`}>
                Welcome <GradientFont>{name!==''?name:'unknown entity'}</GradientFont>
            </h2>
            <InputForm setName={setName} ></InputForm>
        </div>
    )
}
export default Name;