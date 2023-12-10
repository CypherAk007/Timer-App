import classes from './GradientFont.module.scss'

const GradientFont = (props)=>{
    return (
        <span className={classes.txtgrad}>{props.children}</span>
    )
}

export default GradientFont;