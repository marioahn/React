import { createSlice } from '@reduxjs/toolkit'

// 유저
let user = createSlice({
  name: 'user',
  initialState: {name: 'kim', age: 20},
  reducers: { 
    changeName(state) {
      return {name: 'park', age: 20}
    },
    plusAge(state) {
      state.age += 1
    },
    plusAge2(state, a) {
      state.age += a.payload
    }
  }
})
  // 이것도 같이 옮기기!
export let { changeName, plusAge, plusAge2 } = user.actions

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

export { cart, stock, user }

