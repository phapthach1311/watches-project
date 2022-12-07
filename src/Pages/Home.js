import React from 'react'
import { Hero } from '../Component/Hero'
import { SearchForm } from '../Component/SearchForm'
import { Footer } from '../Component/Footer'
import {BestSales} from '../BestSales'
import {MostPopular} from '../MostPopular'


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
            <BestSales />
            <MostPopular />
            <Footer />
        </div>
    )
}
