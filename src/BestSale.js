import React from 'react'
import { useGlobalContext } from './context'
import items from './data'
import { Link } from 'react-router-dom'
import './BestSale.css'

export const BestSale = () => {
    const {add} = useGlobalContext();

    return (
        <div className='best_sale'>
            {/* <div className='category_item'>
                <i className='fa fa-fire'></i>
                <p>Most Popular</p>
            </div>
            <div className='best_sale_products'>
                {items.map(item => {
                    const {id, img, name, price} = item;
                    if(item.quality === "best_sale"){
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
