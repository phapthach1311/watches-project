import React from 'react'
import './SearchForm.css'

export const SearchForm = () => {
    
    return (
        <div className="search_form">
            <form>
                <input type="text" className="search_input" placeholder="Search"/>
                <button className="search_btn"><i className='fa fa-search'></i></button>
            </form>
        </div>
    )
}
