import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'


export const Register = createAsyncThunk ('Manager/Register',async (newManager,{rejectWithValue})=>{
try {
     const {data} = await axios.post('/api/manager/Register',newManager)
     return data
} catch (error) {
    return rejectWithValue(error.response.data.message?error.response.data.message:error.response.data.Errors)
}
})

export const SignIn = createAsyncThunk('Manager/SignIn',async (Manager , {rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/manager/Login',Manager)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message?error.response.data.message:error.response.data.Errors)
    }
})








const ManagerSlice = createSlice({
    name:'Manager',
    initialState:{
        manager:JSON.parse(localStorage.getItem('manager')),
        isLoading:false,
        RegisterErrors:null,
        LoginErrors:null,
        token:localStorage.getItem('token'),
        isAuth:Boolean(localStorage.getItem('isAuth')) ,
        msg:null
    },
    reducers :{
        ClearErrors: (state)=>{
            state.RegisterErrors=null
            state.LoginErrors=null
        },
        Logout :(state)=>{
            localStorage.clear()
            state.manager={}
            state.isAuth=false
            state.token=null    
        }
    },
    extraReducers:{
        [Register.pending]:(state)=>{
            state.isLoading=true
        },
        [Register.fulfilled]:(state,{type,payload})=>{
            state.isLoading=false  
            state.msg=payload.msg
        },

        [Register.rejected]:(state,{type,payload})=>{
            state.RegisterErrors=payload
        },
        [SignIn.pending]:(state)=>{
            state.isLoading=true
        },
        [SignIn.fulfilled]:(state,{type,payload})=>{
            state.isLoading = false
            state.manager = payload.isFound
            state.token = payload.token
            state.isAuth = true
            localStorage.setItem('token',payload.token )
            localStorage.setItem('manager',JSON.stringify(payload.isFound) )
            localStorage.setItem('isAuth', true)
           
        },

        [SignIn.rejected]:(state,{type,payload})=>{
            state.LoginErrors=payload
        },

    }
})
export default ManagerSlice.reducer
export const {Logout,ClearErrors}=ManagerSlice.actions