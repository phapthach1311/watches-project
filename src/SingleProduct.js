import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import items from './data'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SingleProduct.css'
import { useGlobalContext } from './context'

export const SingleProduct = () => {
    const { id } = useParams()
    const [singleItem, setSingleItem] = useState({});
    const [amountItem, setAmountItem] = useState(1)
    const {add} = useGlobalContext();

    const getData = () => {
        let newItem = items.filter(item => item.id === parseInt(id));
        setSingleItem(newItem[0]);
    }

    // useEffect(() => {
    //     // setAmountItem(amountItem => {
    //     //     if(amountItem <= 0){
    //     //         return amountItem + 1;
    //     //     }
    //     // })
    //     if(amountItem <= 1){
    //         setAmountItem(1);
    //     }
    // }, [amountItem])

    useEffect(() => {
        getData();
    }, [])

    const decreaseAmount = () => {
        if(amountItem === 1){
            return;
        }
        setAmountItem(amountItem - 1);
    }
    const {img, name, price, desc, oldPrice, stars, color, rating} = singleItem


    return (
        <div className='single_product'>
            <div className='single_product_container'>
                <div className='single_product_header'>
                    <Link to='/product' className='back_to_products'>BACK TO PRODUCTS</Link>
                    <h2>{name}</h2>
                    {Array(stars).fill().map((_, i) => (<p className='fa fa-star'></p>))}
                </div>
                <div className='single_product_info_img'>
                    <img src={img} alt={name} className='single_product_img'></img>
                    <div className='single_product_info'>
                        <p className='single_product_name'><span>Name:</span>{name}</p>
                        <p className='single_product_price'><span>Price:</span><span className='price'>${price}</span><span className='old_price'>${oldPrice}</span></p>
                        <p className=''><span>You save:</span>${`${oldPrice - price} (${parseInt(((oldPrice - price)/oldPrice)*100)}%)`}</p>
                        <p className='color'><span>Color:</span>{color}</p>
                        <p>{rating} ratings</p>
                        <p className='description'><span>Description:</span>{desc}</p>
                        <div className='single_product_btns_container'>
                            <div className='single_product_btns'>
                                <button className='increase_btn fa fa-plus' onClick={() => setAmountItem(amountItem+1)}></button>
                                <p className='amount_item'>{amountItem}</p>
                                <button className='decrease_btn fa fa-minus' onClick={decreaseAmount}></button>
                            </div>
                            <button className='add_btn' onClick={() => add(parseInt(id), amountItem)}>Add to Cart</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
