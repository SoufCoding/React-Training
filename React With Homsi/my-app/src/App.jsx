import About from "./Component/About/About"
import { useContext } from "react"
import Contact from "./Component/Contact/Contact"
import Intro from "./Component/intro/Intro"
import ProductList from "./Component/ProductList/ProductList"
import Toggle from "./Component/Toggle/Toggle"
import { ThemeContext } from "./Context"


const App = () => {
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
    return (
        <div style= {{backgroundColor: darkMode? "#222" : "white", color: darkMode && "white" }}>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
            <Toggle/>
        </div>
    )
}

export default App