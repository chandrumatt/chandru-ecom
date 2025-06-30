import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Edit } from "lucide-react";

export const fetchProduct = createAsyncThunk("fetch/product", async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers:{
    addProducts:(state,action)=>{
        state.data.push(action.payload)
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProduct.pending,(state)=>{
        state.status="Loading"
    }).addCase(fetchProduct.fulfilled,(state,action)=>{
       ( state.status="Success"),(state.data=action.payload.products)
    }).addCase(fetchProduct.rejected,(state,action)=>{
       ( state.status="failed"),(state.error=action.error.message)
    })
  },
},);

export const {addProducts}=productSlice.actions


export default productSlice.reducer;