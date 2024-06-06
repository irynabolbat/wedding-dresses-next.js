import { fetchCollection } from '@/api/dressesCollection/route'
import { Dress } from '@/types/Dress'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCollectionAsync = createAsyncThunk('collection/fetchCollection', async () => {
  const collection = await fetchCollection();
  return collection;
});

export type CollectionState = {
  value: Dress[],
  loading: boolean
}

const initialState: CollectionState = {
  value: [],
  loading: false
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollectionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCollectionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchCollectionAsync.rejected, (state) => {
        state.loading = false;
      });
  },
})

export default collectionSlice.reducer
