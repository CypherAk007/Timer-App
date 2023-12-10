import classes from './App.module.scss'
import Heading from './components/Heading.jsx';
import Name from './components/Name'
const App = ()=>{
  return(
    <div className={`${classes.app} text-center my-32 mx-auto min-h-200  bg-black rounded-2xl text-white max-w-screen-md box `}>
      <Heading></Heading>
      <Name></Name>
    </div>
  )
}
export default App;