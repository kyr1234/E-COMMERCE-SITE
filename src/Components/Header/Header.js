import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
function Header() {
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
        <div className="header_option">
          <span className="option_line_one">Hello Guest</span>
          <span className="option_lin_two">Sign In</span>
        </div>

        <div className="header_option">
          <span className="option_line_one">Returns</span>
          <span className="option_lin_two">& Orders</span>
        </div>

        <div className="header_option">
          <span className="option_line_one">Your</span>
          <span className="option_lin_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="shopping_basket">
            <ShoppingCartIcon className="cart" />
            <span className="itemscount">0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Header
