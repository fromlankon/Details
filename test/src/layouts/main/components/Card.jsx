import React from 'react'
import {Link} from 'react-router-dom';

function Card({product}) {

    const posterUrl = `https://image.tmdb.org/t/p/w500${product.poster_path}`;

    return (
        <div className="card">
            <div className='img'>
                <img src={posterUrl}/>
                <div className="imgText">
                    <div className='cardPlay'>
                        <i className="bi bi-play-fill"></i>
                    </div>
                    <p className='text4'> READ MORE </p>
                    <p className='text5'> Released: {product.release_date}</p>
                </div>
            </div>
            <div className='cardBottom'>
                <Link to={`${product.id}`} className='title'> {product.title} </Link>
                <p className="rating"> <i className = "fa-solid fa-star"></i> {product.vote_average.toFixed(1)} </p>
            </div>
        </div>
    )
}
export default Card