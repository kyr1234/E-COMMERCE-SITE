import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import Orders from './Orders'
function Order() {
  const [{ basket, user }, dispatch] = useStateValue()
  const [orders, setorders] = useState([])

  useEffect(() => {
    if (user) {
      db.collection('users')
        .docs(user?.id)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          setorders(
            snapshot.docs.map((docs) => ({
              id: docs.id,
              data: docs.data(),
            })),
          )
        })
    } else {
      setorders([])
    }
  }, [])

  return (
    <div>
      <h1>YOUR ORDERS</h1>
      <div className="order_details">
        {orders && orders.map((order) => <Orders order={order} />)}
      </div>
    </div>
  )
}

export default Order
