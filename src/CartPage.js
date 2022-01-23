import React, {useState, useEffect} from 'react'
import { CartItems } from './CartItems'
import { Navbar } from './Navbar'
import {Loading} from './Loading'
import { Footer } from './Footer'
export const CartPage = () => {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(true)
    //     }, 1000)
    // }, [])

    // if(!loading){
    //     return <Loading />
    // }
    return (
        <>
            {/* <Navbar /> */}
            <CartItems />   
            {/* <Footer /> */}
        </>
    )
}
