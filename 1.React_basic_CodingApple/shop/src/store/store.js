import { configureStore } from '@reduxjs/toolkit'
import { cart, stock, user } from './storeSlice.js'


export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
})