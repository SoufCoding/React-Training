import './Toggle.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

const Toggle = () => {
    const Theme = useContext(ThemeContext)
    const handleClick= () =>{
        Theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className='t'>
            <img src={sun} alt="" className="t-icon" />
            <img src={moon} alt="" className="t-icon" />
            <div className="t-botton" onClick={handleClick} style={{left: Theme.state.darkMode? 0 :25 }}></div>
        </div>
    )
}

export default Toggle
