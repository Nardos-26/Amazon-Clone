import React, { useEffect, useState } from 'react'
// import styles from './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import LayOut from '../../Components/LayOut/LayOut'
import Loader from '../../Components/Loader/Loder';

function ProductDetail() {
    const {productId} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState({})
    useEffect(() => {
      setIsLoading(true)
      axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        });
    }, [productId]);
  
  return (
    <LayOut>
      {isLoading? (<Loader/>) :(<ProductCard 
      product={product} 
      flex ={true} 
      renderDesc ={true}
      renderAdd={true}

       />)}
    </LayOut>
  )
}

export default ProductDetail
