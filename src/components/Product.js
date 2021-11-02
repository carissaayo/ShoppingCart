import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({product}) => {
    const {name,description,price,_id:id,imageUrl} = product;
 
    return (
      <div className="product">
          <img src={imageUrl} alt={name} />
        <div className="product__image-con">
        </div>
        <div className="product__info">
          <p className="info__name">{name}</p>
          <p className="info__desc">{description}</p>
          <p className="info__price ">${price}</p>
          <Link to={`/products/${id}`} className="info__button">
            View
          </Link>
        </div>
      </div>
    );
}

export default Product;
