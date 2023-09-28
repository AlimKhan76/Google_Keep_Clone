import { createSlice } from "@reduxjs/toolkit";


const UserSlice= createSlice({
    name: "user",
    initialState: {},
    reducers:{
        addUser(action){
            return action.payload;
        },
        removeUser(){
            return initialState;
        }

    }
})