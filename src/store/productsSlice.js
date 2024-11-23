import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch all products data
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:5000/products');
  return response.data;
});

// Thunk to fetch a single product by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${productId}`);
      if (response.status === 200) {
        return response.data;
      }
      // If the product isn't found, reject with a custom message
      return rejectWithValue('Product not found');
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    productDetail: null, // For storing a single product's details
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    detailStatus: 'idle', // Separate status for fetching a single product
    error: null, // For general errors
    detailError: null, // For specific product fetch errors
  },
  reducers: {
    clearProductDetail(state) {
      // Clears product details and any error specific to the detail view
      state.productDetail = null;
      state.detailStatus = 'idle';
      state.detailError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetching all products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })

      // Handle fetching a single product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.detailStatus = 'loading';
        state.detailError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.productDetail = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.detailError = action.payload || 'Failed to fetch product details';
      });
  },
});

// Exporting the clear action to be used in ProductDetail or other components
export const { clearProductDetail } = productSlice.actions;

export default productSlice.reducer;
