import React, { useEffect } from 'react'
import Orders from './Components/Orders/Order'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Payment from './Components/Payment/Payment'
import Checkout from './Components/Checkout/Checkout'
import './App.css'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
function App() {
  const [state, dispatch] = useStateValue()
  const promise = loadStripe(
    'pk_test_51KL9f2SE1jfTQHP7kYM5FzJ8ySS9LqCOSWV21cGZmaeJ1ifY79U7OC8uaHF5evXKqjOFSphyCjYkGBAlLQi3GRbg00PRZXwTE0',
  )
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      console.log(authuser)
      if (authuser) {
        dispatch({
          type: 'LOGIN_USER',
          payload: authuser,
        })
      } else {
        dispatch({
          type: 'LOGIN_USER',
          payload: null,
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
