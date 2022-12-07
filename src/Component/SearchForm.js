import React from 'react'
import '../styles/searchform.css'

export const SearchForm = () => {
    
    return (
        <div className="search_form">
            <form>
                <input type="text" className="search_input" placeholder="Search for product"/>
                <button className="search_btn"><i className='fa fa-search'></i></button>
            </form>
        </div>
    )
}
