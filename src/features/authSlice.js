import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name :"auth",
    initialState: {user:null, loading:true},

    reducers: {
        setUser: (state, action) => {  // redux usses Immer tool which help us to make this states mutable otherwise it wont allow to change state here
            state.user = action.payload;
            state.loading = false; 
        },
        clearUser: (state, action) =>{
            state.user = null;
            state.loading = false; 
        },

    },
})

export const {setUser, clearUser} = authSlice.actions
export default authSlice.reducer;