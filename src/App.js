import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import './App.css'
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"


function App() {
const [state,dispatch]= useStateValue()

 useEffect(()=>{
auth.onAuthStateChanged(authuser=>{
  console.log(authuser)
  if(authuser)
  {
dispatch({
  type:'LOGIN_USER',
  payload: authuser
})
  }
  else{
    dispatch({
      type:'LOGIN_USER',
      payload: null
    })
  }
})

},[]) 



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
