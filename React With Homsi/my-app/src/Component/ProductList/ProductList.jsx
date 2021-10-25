import Product from '../Product/Product'
import './ProductList.css'
import {Products} from '../../data'

const ProductList = () => {
    return (
        <div className = "pl">
            <div className="pl-text">
                <h1 className="pl-title">Create & Inspire. It's Lama</h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed minus molestiae eligendi aliquam veritatis quasi ex, nisi adipisci qui!</p>
            </div>
            <div className="pl-list">
                {Products.map((item) =>(
                    <Product key= {item.id} img={item.img} link= {item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList 
