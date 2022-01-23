import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import {auth} from "../../firebase"
function Header() {
  const [{ basket,user }, dispatch] = useStateValue()


const handleauth=()=> { 
  if(user)
  {
    auth.signOut()
  }
}


  return (
    <div className="header">
      <Link to="/">
        <img
          alt="amazonlogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82Io_97oYZWyD8sw7QWy9V7X1ucalRIJCwm_VDLyJiJCb7FLicu9LI8qL_y8DZma2Teg&usqp=CAU"
          className="amazonimg"
        />
      </Link>

      <div className="search">
        <input type="text" className="input_field" placeholder="Search" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleauth} className="header_option">
            <span className="option_line_one">Hello {user? user.email:'Guest'}</span>
            <span className="option_lin_two">{user?'Sign Out':'Sign-In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="option_line_one">Returns</span>
          <span className="option_lin_two">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="shopping_basket">
            <ShoppingCartIcon className="cart" />
            <span className="itemscount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Header
