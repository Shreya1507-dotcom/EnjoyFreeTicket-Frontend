// store/studioSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';

// Async thunk for registering a studio
export const registerStudio = createAsyncThunk(
  'studio/registerStudio',
  async (payload) => {
    const response = await Api.registerStudio(payload);
    console.log("response", response);
    return response;
  }
);    

// export const getStudioDetails = createAsyncThunk(
//   'studio/registerStudio',
//   async (payload) => {
//     const response = await Api.registerStudio(payload);
//     console.log("response", response);
//     return response;
//   }
// );   

// api/studios/get_studio_profile
export const feedbacks = createAsyncThunk(
  'studio/feedbackStuidio',
  async (payload) => {
    const response = await Api.feedbacks(payload);
    console.log("Feedback response", response);
    return response;
  }
);

const studioSlice = createSlice({
  name: 'studio',
  initialState: {

    loading: false,
    error: null,
    success: false,

    registerStep1: '',
    registerStep2: '',
    registerStep3: '',
    feebackReview: [],
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerStudio.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerStudio.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        console.log('Studio registered successfully:', action.payload);
      })
      .addCase(registerStudio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        console.error('Studio registration failed:', action.error);
      })

      .addCase(feedbacks.pending, (state) => {
         state.loading = true;
          state.error = null;
          state.success = false;
      })
      .addCase(feedbacks.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
         console.log('Feedback registered successfully:', action.payload);
      })
      .addCase(feedbacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
         console.log('Feedback registered Failed:', action.payload);

      });
  },
  reducers : {
    studioFeedbacks: (state,action) =>{
      state.feebackReview = action.payload;
    },
    register_Step_1: (state, action) => {
      state.registerStep1 = action.payload;
    },
    register_Step_2: (state,action) =>{
      state.registerStep2 = action.payload;
    },
    register_Step_3: (state,action) =>{
      state.registerStep3 = action.payload;
    }
  }
});

export const { setFormData, clearStudioState, register_Step_1,register_Step_2,register_Step_3, studioFeedbacks, } = studioSlice.actions;
export default studioSlice.reducer;
