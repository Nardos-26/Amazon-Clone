import {useEffect, useState} from "react";
import styles from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import axios from 'axios';
import { productUrl } from "../../Api/endPoints";
import Loader from '../../Components/Loader/Loder';


function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryName} = useParams()

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName])


  return(
    <LayOut>
      <section>
          <h1 style={{ padding: "30px"}}>Results</h1>
          <p style={{ padding: "30px"}}>Category / {categoryName} </p>
          <hr />
          {isLoading?(
            <Loader/>) : (
              <div className={styles.products_container}>
                {results?.map((product) => (
                  <ProductCard 
                    key={product.id}
                    product= {product}
                    renderDesc={false}
                    renderAdd={true}
                  />
                ))}
              </div>
          )}            
      </section>
    </LayOut>

  )
    
}

export default Results;
