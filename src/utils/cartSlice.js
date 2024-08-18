import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // vanila older redux => don't mutate state
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState

            // immer 

            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK => either mutate existing state or return the new state
            //return { items: [] };


            // state.items.length = 0
            // state.items = []
            return { items: [] };


            // console.log(current(state));  // ["pizza"]
            // state = []
            // console.log(state)



            // //state.items.length = 0
            // // TODO : Need to Discuss
            // state.items = []



            // Redux Toolkit     
            // we have to mutate the state 

        }
    }
})

// cartSlice {
//     actions: {
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer

// }

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer;
