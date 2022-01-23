import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useNavigate } from 'react-router-dom'
import { gettotalamount } from '../../Reducer'
import { useStateValue } from '../../StateProvider'
function Subtotal() {
  const navigate = useNavigate()
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="flex flex-col  subtotal ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="font-bold text-center p-4 ">
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="text-center">
              <input type="checkbox" />
              This Order Includes An Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={gettotalamount(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <div className="grid place-items-center">
        
          <button onClick={e=>navigate('/payment')} className="bg-yellow-400 font-bold p-2 rounded-lg mt-2">
            Proceed To Checkout
          </button>
        
      </div>
    </div>
  )
}

export default Subtotal
