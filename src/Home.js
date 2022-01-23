import React, {useState, useEffect} from 'react'
import { Hero } from './Hero'
import { Navbar } from './Navbar'
import { SearchForm } from './SearchForm'
import './Home.css'
import { Products } from './Products'
import { Footer } from './Footer'
import {BestSale} from './BestSale'
import {MostPopular} from './MostPopular'
import { useGlobalContext } from './context'
import { Loading } from './Loading'

export const Home = () => {
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
        <div className="home">
            {/* <Navbar /> */}
            <Hero />
            <SearchForm />
            <BestSale />
            <MostPopular />
            <Footer />
        </div>
    )
}
