import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name:'tasks',
    initialState:{items:[],loading:false},
    reducers:{

    }
})

export default tasksSlice.reducer