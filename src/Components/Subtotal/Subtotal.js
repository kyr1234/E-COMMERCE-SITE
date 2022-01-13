import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
function Subtotal() {
  return (
    <div className="flex flex-col  subtotal ">
      <CurrencyFormat
        renderText={() => (
          <>
            <p className="font-bold text-center p-4 ">
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="text-center">
              <input type="checkbox" />
              This Order Includes An Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <div className="grid place-items-center">
        <button className="font-semibold bg-yellow-400 mt-4 px-2 mb-2  ">
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default Subtotal
