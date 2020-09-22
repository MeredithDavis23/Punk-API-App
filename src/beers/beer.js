import React from 'react';
import './/Beer.css';
import Like from '../Heart';
import '../App.css'



const Beer = (props, handleClick) => {
    return (

        <li className= 'beers'>
        <h2>{props.beer.name}</h2>
            <p>{props.beer.tagline}</p>
            <div class='img-and-button'>
            <img alt='beer' src={props.beer.image_url} className="beer-image"></img>
            {/* <button onClick={handleClick}>Like</button> */}
            <Like />
        </div>
        </li>
    )
}

export default Beer;