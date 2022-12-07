import React, {useState, useEffect} from 'react'
import { CartItems } from '../Component/CartItems'
// import { Navbar } from '../Component/Navbar'
// import {Loading} from '../Component/Loading'
import { Footer } from '../Component/Footer'
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
            <Footer />
        </>
    )
}
