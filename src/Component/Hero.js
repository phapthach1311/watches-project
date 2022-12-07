import React, {useState, useEffect} from 'react'
import '../styles/hero.css'
import imgData from '../Data/imgData'
import {Link} from 'react-router-dom';

export const Hero = () => {
    const [data, setData] = useState(imgData) 
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, data])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 7000);
        return () => {
            clearInterval(slider);
        };
        }, [index]);
        
    return (
        <div className="hero">
            <div className='img_button'>
                <div className="hero-img">
                    {data.map((item, indexImg) => {
                        let position = 'next-slide'
                        if(index === indexImg){
                            position = 'active-slide'
                        } else if((index === 0 && indexImg === data.length-1)||indexImg === index - 1){
                            position = 'last-slide'
                        }
                        return <article className={`${position}`} key={indexImg}>
                            <img src={item} alt="" className="img-introduce"/>
                            <Link to="/product" className='buy_btn'>Buy now</Link>
                        </article>           
                    })}
                </div>
                <div className='toggle_btn'>
                    <button onClick={() => setIndex(index-1)} className='previous_btn fas fa-caret-left'></button>
                    <button onClick={() => setIndex(index+1)} className='next_btn fas fa-caret-right'></button>
                </div>
            </div>
            <div className='all_circle'>
                {data.map((item, Imgindex) => {
                    return <div className={`circle ${index === Imgindex && 'light'}`} key={Imgindex} onClick={() => {setIndex(Imgindex)}}></div>
                })}
            </div>
        </div>
    )
}