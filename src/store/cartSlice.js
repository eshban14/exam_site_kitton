// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0, // Initial count for items in the cart
    items: [] // To store cart items if needed in the future
  },
  reducers: {
    addToCart: (state, action) => {
        state.count += 1;
        state.items.push(action.payload);
      },
      removeFromCart: (state, action) => {
        state.count -= 1; // Decrease the count
        state.items = state.items.filter(item => item.id !== action.payload); // Remove item from array
      }
    }
  });

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
