// src/store/storySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStories = createAsyncThunk(
  'stories/fetchStories',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://child.onrender.com/api/sciencefiction');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const storySlice = createSlice({
  name: 'stories',
  initialState: {
    stories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error;
      });
  },
});

export default storySlice.reducer;
