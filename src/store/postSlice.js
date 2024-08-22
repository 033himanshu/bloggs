import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPosts : null,
    isSet : false,
}

const postSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        setPosts : (state, action) => {
            state.allPosts = action.payload.allPosts
            state.isSet = true
        },
        deletePosts : (state) =>  {
            state.allPosts = null
            state.isSet = false
        },
    }
})

export const {setPosts, deletePosts} = postSlice.actions

export default postSlice.reducer