// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // Optional if you want to handle API calls

const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: {},  // This can hold your authentication state
    details: {
      dob: '',
      address: '',
      city: '',
      postcode: '',
      country: '',
    },
  },
  reducers: {
    setUserDetails(state, action) {
      // Set the user details from the payload
      state.details = action.payload;
    },
    updateUserDetails(state, action) {
      // Update the specific fields of user details
      state.details = { ...state.details, ...action.payload };
    },
    setAuth(state, action) {
      // Set the authentication details
      state.auth = action.payload;
    },
  },
});

// Export actions
export const { setUserDetails, updateUserDetails, setAuth } = userSlice.actions;

// Optional: Async function to fetch user details from the server
export const fetchUserDetails = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user/details'); // Adjust the API endpoint
    dispatch(setUserDetails(response.data));
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

// Export the reducer
export default userSlice.reducer;
