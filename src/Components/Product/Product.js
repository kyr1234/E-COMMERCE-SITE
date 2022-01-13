import React from 'react'
import './Product.css'

function Product({ title, price, rating, img }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>
                <img
                  src="https://thumbs.dreamstime.com/b/yellow-star-icon-rating-vector-eps-143537451.jpg"
                  className="star"
                />
              </span>
            ))}
        </div>

        <div className="product_img">
          <img className="img" src={img} />
        </div>
<button className="font-semibold bg-yellow-400 mt-4 mx-auto">ADD TO BASKET</button>

      </div>
    </div>
  )
}
export default Product
