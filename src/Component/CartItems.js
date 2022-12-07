import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
import '../styles/cartitems.css'

export const CartItems = () => { 
    const {items, remove, increase, decrease, total} = useGlobalContext();

    return (
        <div className="cart_items">
            <h2>Your Cart Items</h2>
            <div className='cart_container'>
                {items.map(item => {
                        const {id, img, name, price, amount} = item;
                        let cost = price*amount;
                        return (
                            <div key={id} className='cart_item'>
                                <img src={img} alt={name} className='img'></img>
                                <div className='info_cart'>
                                    <p className='name_cart'><span>Name:</span>{name}</p>
                                    <p className='price_cart'><span>Price:</span>${price}</p>
                                    <div className='toggle_btn'>
                                        <p className='quantity'>Quantity: </p>
                                        <div className='cart_btn'>
                                            <button onClick = {() => decrease(id)} className='fa fa-minus'></button>
                                            <p>{amount}</p>
                                            <button onClick = {() => increase(id)} className='fa fa-plus'></button>
                                        </div>
                                    </div>
                                    <p className='all_cost'><span>Subtotal:</span>${cost}</p>
                                    <button className='remove_btn' onClick={() => remove(id)}>Remove</button>
                                </div>
                            </div> 
                        )
                    })}
            </div>
            <div className='payment'>
                <h2>${total}</h2>
            </div>
            
        </div>
    )
}
