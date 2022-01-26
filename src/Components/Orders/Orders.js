import React from 'react'
import moment from 'moment'
import Checkoutcard from '../Checkoutcard/Checkoutcard'
import CurrencyFormat from 'react-currency-format'

function Orders({ order }) {
  return (
    <div className="order">
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>

      <p className="order_id">
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <Checkoutcard
          src={item.img}
          rating={item.rating}
          id={item.id}
          title={item.title}
          price={item.price}
          hidden
        />
      ))}


      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="font-bold text-center p-4 ">
              Subtotal ({order.data.basket.length} items): <strong>{value}</strong>
            </p>
          
          </>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />


    </div>






  )
}

export default Orders
