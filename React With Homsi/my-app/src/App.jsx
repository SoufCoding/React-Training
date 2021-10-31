import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Intro from "./Component/intro/Intro"
import ProductList from "./Component/ProductList/ProductList"
import Toggle from "./Component/Toggle/Toggle"


const App = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
            <Toggle/>
        </div>
    )
}

export default App