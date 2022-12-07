import React, {useState} from 'react'
import '../styles/products.css'
import items from '../Data/data'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { Categories } from './Categories'

const categories = ["all", ...new Set(items.map(item => item.category))]

export const Products = () => {
    const {add} = useGlobalContext();
    const [products, setProducts] = useState(items);

    const filterItems = (category) => {
        if(category === "all"){
            setProducts(items);
            return;
        }
        let newProducts = items.filter(item => item.category === category);
        setProducts(newProducts)
    }
    
    return (
        <div className="products_container">
            <Categories categories={categories} filterItems = {filterItems}/>
            <div className='products'>
                {products.map(item => {
                    const {id, name, img, price, oldPrice, stars} = item;
                    return (
                        <div className="product" key={id}>
                            <Link to={`./singleproduct/${id}`} className="product_info">
                                <img src={img[0]} alt={name} className='product_img' />
                                <p className="product_name">{name}</p>
                                <div className='product_rating'>
                                    {stars > 0 && Array(stars).fill().map((_, i) => <p className='fa fa-star' key={i}></p>)}
                                </div>
                                <p className='product_price'>${price}<span className='product_old_price'>{`${oldPrice !== null ? `$${oldPrice}`:'' }`}</span></p>
                            </Link>
                            <button onClick={() => add(id, 1)} className='product_add_btn fas fa-shopping-cart'></button>
                        </div>
                        
                    )
                })}
            </div>
            
        </div>
    )
}
