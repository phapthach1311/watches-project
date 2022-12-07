import React, {useState, useEffect} from 'react'
import { Products } from '../Component/Products'
import { SearchForm } from '../Component/SearchForm'
import {Loading} from '../Component/Loading'
import { Footer } from '../Component/Footer'

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
            {/* <h2 style={{margin: "20px", textAlign: "center", color: "red"}}>Products</h2> */}
            <Products />  
            <Footer /> 
        </>
    )
}
