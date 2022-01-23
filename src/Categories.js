import React, {useState} from 'react'

export const Categories = ({categories, filterItems}) => {
    const [index, setIndex] = useState(0)

    return (
        <div className='categories'>
            {categories.map((category, cateIndex) => {
                return <button key = {cateIndex} className = {`category_btn ${index === cateIndex && 'active_btn'}`} onClick={() => {filterItems(category); setIndex(cateIndex);}}>{category}</button>
            })}
        </div>
    )
}
