import { PropTypes } from 'prop-types'
import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer.js'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.array
}
