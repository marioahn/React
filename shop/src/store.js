import { configureStore, createSlice } from '@reduxjs/toolkit'

// 유저
let user = createSlice({
  name: 'user',
  initialState: {name: 'kim', age: 20},
  reducers: { 
    changeName(state) { // 변수는 기존 state를 뜻함ㅇㅇ.
      return {name: 'park', age: 20}
      // state.name = 'park' // return 대신에 이렇게 직접 수정해도 봐줌ㅇㅇ!
    },
    plusAge(state) {
      state.age += 1
    }
  }
})

export let { changeName, plusAge } = user.actions 


// 재고
let stock = createSlice({ 
  name: 'stock',
  initialState: [10, 11, 12] 
})

// 장바구니 상품
let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
})