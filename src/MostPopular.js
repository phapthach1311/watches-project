import React from 'react'
import items from './data'
import { Link } from 'react-router-dom'
import './Products.css'
import './BestSale.css'
import { useGlobalContext } from './context'

export const MostPopular = () => {
    const {add} = useGlobalContext();
    
    return (
        <div className='most_popular'>
            {/* <div className='category_item'>
                <i className='fa fa-bolt'></i>
                <p>Best Sales</p>
            </div>
            <div className='best_sale_products'>
                {items.map(item => {
                    const {id, img, name, price} = item;
                    if(item.quality === "most_popular"){
                        return <div className="item" key={id}>
                        <Link to={`./singleproduct/${id}`} className="toLink">
                            <img src={img} alt={name}></img>
                            <p className="name">{name}</p>
                            <p className='price'>${price}</p>
                        </Link>
                        <button onClick={() => add(id, 1)} className='add_btn'>Add to cart</button>
                    </div>
                    }
                })}
            </div> */}
        </div>
    )
}
