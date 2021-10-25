import About from "./Component/About/About"
import Intro from "./Component/intro/Intro"
import ProductList from "./Component/ProductList/ProductList"


const App = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <ProductList/>
        </div>
    )
}

export default App