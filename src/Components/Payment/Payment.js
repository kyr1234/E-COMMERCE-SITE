import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import CurrencyFormat from 'react-currency-format'
import Checkoutcard from '../Checkoutcard/Checkoutcard'
import { gettotalamount } from '../../Reducer'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  const [error, seterror] = useState(null)
  const [disable, setdisable] = useState(true)
  const [succeeded, setsucceeded] = useState(false)
  const [processing, setprocessing] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  const handlesubmit = (e) => {}

  const handlechange = (event) => {
    setdisable(event.empty)
    seterror(event.error ? event.error.message : '')
  }
  return (
    <div className="payment bg-gray-400">
      <div className="payment_container bg-white ">
        <div className="heading text-center font-bold p-2 text-lg bg-gray-400">
          CHECKOUT (<Link to="/checkout">{basket?.length} items </Link>)
        </div>
        <div className="address flex justify-around  border-b-2 align-items-center p-2">
          <p className="font-bold text-md my-auto">DELIVERY ADDRESS</p>
          <div className="details">
            <ul>
              <li>{user?.email}</li>
              <li>123,Hans Society</li>
              <li>Mota Varachha</li>
            </ul>
          </div>
        </div>

        <div className="items flex justify-around border-b-2 align-items-center p-2">
          <div className="cart font-bold text-md my-auto text-center">
            Review Items And Delivery
          </div>

          <div className="details">
            {basket.map((item) => (
              <Checkoutcard
                id={item.id}
                src={item.img}
                title={item.title}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="finalamount flex  justify-around align-items-center py-4 ">
          <div className="cart font-bold text-md  ">Payment Method</div>
          <div className="amountform mt-8 w-80">
            <form className="font-bold w-full" onSubmit={handlesubmit}>
              <CardElement onChange={handlechange} />
              <div className="price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p className="font-bold text-center p-4 ">
                        Subtotal ({basket.length} items):{' '}
                        <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={gettotalamount(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <div className="flex justify-center">
                  <button
                    className="bg-yellow-400 font-bold p-2 rounded-lg "
                    disabled={processing || disable || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : 'BUY NOW'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
