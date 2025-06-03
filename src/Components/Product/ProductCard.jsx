import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from "./Product.module.css";
import { Link } from 'react-router-dom'
import Rating from "@mui/material/Rating";
import { useContext } from 'react';
import { Type } from '../Utility/action.type';
import { DataContext } from '../DataProvider/DataProvider';


function ProductCard({product= {}, flex, renderDesc, renderAdd}) {
    const {image, title, id, rating, price, description} = product

        const [state,dispatch]=useContext(DataContext)

        console.log("CSS module:", classes);
            // console.log(state)

        const addToCart = ()=>{
            dispatch({
              type: Type.ADD_TO_BASKET,
              item: {
                image,
                title,
                id,
                rating,
                price,
                description,
              },
            });
        }




  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* count */}
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && 
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        }
        
      </div>
    </div>
  );
}

export default ProductCard
