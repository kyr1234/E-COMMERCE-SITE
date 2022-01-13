import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
function Checkout() {
  return (
    <div className="checkout grid lg:grid-cols-2 grid-cols-1 place-items-center p-8">
      <div className="left_di">
        <img
          src="https://omegacommerce.com/assets/logos_orig/AmazonAds_logo.png"
          alt="images"
          className="images"
        />

        <div className="headingproduct mt-8">
          <h2 className="font-bold text-lg border-b-4 border-black">
            YOUR SHOPPING BASKET
          </h2>
        </div>
      </div>
      <div className="right_div">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
