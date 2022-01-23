import React, {useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import { SearchForm } from './SearchForm'
import {Loading} from './Loading'
import { Footer } from './Footer'

export const ProductsPage = () => {

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
            <SearchForm />
            <h2 style={{margin: "20px", textAlign: "center", color: "red"}}>Products</h2>
            <Products />  
            <Footer /> 
        </>
    )
}
