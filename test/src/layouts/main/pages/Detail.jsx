import '../pages/detail.css'
import { useParams } from 'react-router-dom'
import { getSingleData } from '../services/products';
import { useState, useEffect } from 'react';

export default function Detail() {
  const [product, setProduct] = useState({})
  const { original_title, overview, vote_average, release_date, poster_path} = product;
  const posterUrl = "https://image.tmdb.org/t/p/w500";

  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSingleData(id);
        setProduct(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);
  console.log(product)

  return (
    <div className='main'>
      <div className="content">
        <div className="image">
          <img src={`${posterUrl}${poster_path}`} />
        </div>
        <div className="other">
          <p className='title2'> {original_title} </p>
          <p className='description2'> {overview} </p>
          <p className='description2'> Release date: {release_date} </p>
          <p className='description2'> Rate: {vote_average} </p>
        </div>
      </div>
    </div>
  )
}
