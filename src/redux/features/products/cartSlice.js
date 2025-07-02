import { createSlice } from "@reduxjs/toolkit";


const CartSlice=createSlice({
    name:"CartProduct",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(...state,action.payload)
        },
        removeFromCart:(state,action)=>{
            state.filter((item)=>item.id !==action.payload)
        },
        updateCart:(state,action)=>{
         const find=state.findIndex((item)=>item.id==action.payload.id)
         if(find){
            state[find]=action.payload
         }
        }
    }
})