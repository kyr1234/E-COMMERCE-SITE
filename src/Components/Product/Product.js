import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'
function Product({ title, price, rating, img, id }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        title,
        price,
        rating,
        img,
        id,
      },
    })
  }

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
               ✨
               </span>
            ))}
        </div>

        <div className="product_img">
          <img className="img" src={img} alt="images" />
        </div>
        <div className="flex justify-center align-items-center">
          <button
            className="font-semibold bg-yellow-400 mt-4 mx-auto p-2"
            onClick={addToBasket}
          >
            ADD TO BASKET
          </button>
        </div>
      </div>
    </div>
  )
}
export default Product
