export const initialState = {
  basket: [],
  user: null,
}

export const gettotalamount = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0)
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
      }

      case 'EMPTY_BASKET':return {
        ...state,
        basket:[]
      }
    case 'Remove_From_Cart':
      const index = state.basket.findIndex((item) => item.id === action.id)

      const newbasket = [...state.basket]
      if (index >= 0) {
        newbasket.splice(index, 1)
      } else {
        console.log('CANNOT FIND THE ITEM WITH GIVEN INDEX')
      }

      return {
        ...state,
        basket: newbasket,
      }
    default:
      return state
  }
}

export default reducer
