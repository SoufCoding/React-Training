import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Intro from "./Component/intro/Intro"
import ProductList from "./Component/ProductList/ProductList"


const App = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    )
}

export default App