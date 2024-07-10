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
  ],
  reducers: {
    addCount(state, action) {
      // e는 Cart state의 하나하나 요소(initialState에 있는)
      let id = state.findIndex((e) => { return e.id === action.payload })
      state[id].count++
    },
    addItem(state, action) {
      // state.push({id: 1, name: 'Red Knit', count: 1}) <- 예시
      state.push(action.payload)
    }
  }
})
// addCount(0) -> 0번 id상품의 재고(cnt)++!
export let { addCount, addItem } = cart.actions


export { cart, stock, user }

