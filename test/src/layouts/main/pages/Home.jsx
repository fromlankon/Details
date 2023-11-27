import '../components/main.css'
import {useEffect, useState} from "react";
import {getData} from "../services/products";
import Search from '../components/Search';
import Card from '../components/Card';

function Home() {
  const [data, setData] = useState([]);
  const [oldData, setoldData] = useState([])
  const [query, setQuery] = useState("");
  useEffect(() => {
    getData().then((res) => {
      setData(res);
      setoldData(res)
    });
  }, []);

  useEffect(() => {
    setData(
      oldData.filter((product) => {
        if (product.title.toLowerCase().includes(query.toLowerCase())) {
          return product;
        }
      })
    );
  }, [query]);

  return (
    <>
      <Search setQuery={setQuery} />
      <div className='container'>
        <div className='cards'>
          {data.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Home;