import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../../firebase'
function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  let navigate = useNavigate()
  const signin = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      })
      .catch((err) => alert(err.message))
  }
  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      })
      .catch((err) => alert(err))
  }

  return (
    <div className="login ">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          className="w-20 h-15 image mt-8"
          alt="amazon"
        />
      </Link>
      <div className="logindetails w-1/4 mt-8 border-2 p-8">
        <h3 className="font-bold text-xl text-center">SIGN-IN</h3>
        <form>
          <div className=" mt-4 justify-center align-items-center">
            <h5 className="font-bold ">EMAIL ID</h5>
            <input
              type="text"
              value={email}
              className=" fields p-2 w-full bg-white"
              placeholder="Enter Your Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className=" mt-4 justify-center align-items-center">
            <h5 className="font-bold">Password</h5>
            <input
              type="password"
              value={password}
              className="  fields p-2 w-full bg-white"
              placeholder="Enter Your Email"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            className=" mt-8 text-lg w-full buttons font-bold "
            type="submit"
            onClick={signin}
          >
            SIGN IN
          </button>
        </form>
        <button
          className=" mt-8 text-sm w-full bg-gray-200 p-1 font-bold "
          type="submit"
          onClick={register}
        >
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  )
}

export default Login
