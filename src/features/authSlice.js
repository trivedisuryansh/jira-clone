import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'auth',
    initialState: {user:null, loading:true},
    reducers:{

    }
})

export default authSlice.reducer