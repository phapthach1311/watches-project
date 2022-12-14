import React from 'react'
import { useGlobalContext } from './context'
import items from './Data/data'
import { Link } from 'react-router-dom'
import './styles/mostpopular.css'

export const MostPopular = () => {
    const {add} = useGlobalContext();

    return (
        <div className='most_popular'>
            <div className='category_item'>
                <i className='fa fa-fire'></i>
                <p>Most Popular</p>
            </div>
            <div className='products'>
                {items.map(item => {
                    const {id, img, name, price, stars, oldPrice} = item;
                    if(item.quality === "most_popular"){
                        return <div className="product" key={id}>
                        <Link to={`./singleproduct/${id}`} className="product_info">
                            <img src={img} alt={name} className='product_img' />
                            <p className="product_name">{name}</p>
                            <div className='product_rating'>
                                {stars > 0 && Array(stars).fill().map((_, i) => <p className='fa fa-star' key={i}></p>)}
                            </div>
                            <p className='product_price'>${price}<span className='product_old_price'>{`${oldPrice !== null ? `$${oldPrice}`:'' }`}</span></p>
                        </Link>
                        <button onClick={() => add(id, 1)} className='product_add_btn fas fa-shopping-cart'></button>
                    </div>
                    }
                })}
            </div>
            
        </div>
    )
}
