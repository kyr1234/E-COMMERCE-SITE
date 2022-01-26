import React from 'react'
import { useStateValue } from '../../StateProvider'

function Checkoutcard({ src, rating, id, title, price ,hidden}) {
  const [{ button }, dispatch] = useStateValue()

  const removefunction = () => {
    dispatch({
      type: 'Remove_From_Cart',
      id: id,
    })
  }

  return (
    <div className="flex align-items-center justify-start">
      <div className="p-4 w-auto h-auto">
        <img src={src} className="h-40 " alt="amazon" />
      </div>
      <div className="mt-8">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>✨</span>
            ))}
        </div>
      {!hidden &&  <button
          className="bg-yellow-400 font-bold p-2 rounded-lg mt-2 "
          onClick={removefunction}
        >
          REMOVE FROM CART
        </button>}
      </div>
    </div>
  )
}

export default Checkoutcard
