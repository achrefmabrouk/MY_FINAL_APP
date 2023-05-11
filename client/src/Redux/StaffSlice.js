import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const config={headers:{token:localStorage.getItem('token')}}


export const addStaff= createAsyncThunk ('Staff/addStaff',async (newStaff,{rejectWithValue})=>{
    try {
         const {data} = await axios.post('/api/staff/',newStaff)
         return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
    })

    export const GetStaff = createAsyncThunk('Staff/GetStaff',async (_ , {rejectWithValue})=>{
        try {
            const {data} = await axios.get('/api/staff/',config)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    })


    export const UpdateStaff= createAsyncThunk('Staff/UpdateStaff',async(UpdatedStaff,{rejectWithValue})=>{
        try {
            const {data}= await axios.put(`/api/staff/UpdateStaff/${UpdatedStaff._id}`,UpdatedStaff)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    })

    export const DeleteStaff = createAsyncThunk("Staff/DeleteStaff", async(id,{rejectWithValue})=>{
        try {
            const {data} = await axios.delete(`/api/staff/${id}`,config)
            return data
        } catch (error) {
            rejectWithValue(error.response.data.message)
        }
    })


    export const SignInStaff = createAsyncThunk('Staff/SignInStaff',async (Staff , {rejectWithValue})=>{
        try {
            const {data} = await axios.post('/api/staff/LoginStaff',Staff)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message?error.response.data.message:error.response.data.Errors)
        }
    })
     export const GETEMAILclient = createAsyncThunk ('Staff/GETEMAILclient',async(_,{rejectWithValue})=>{
        try {
            const {data} = await  axios.get('/api/staff/emailClient')
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message?error.response.data.message:error.response.data.Errors)

        }
     })
     export const GETEMAILemploye = createAsyncThunk ('Staff/GETEMAILemploye',async(_,{rejectWithValue})=>{
        try {
            const {data} = await  axios.get('/api/staff/emailEmploye')
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message?error.response.data.message:error.response.data.Errors)

        }
     })










const StaffSlice=createSlice({
    name:'Staff',
    initialState:{
        staff:JSON.parse(localStorage.getItem('staff')),
        staffs:[],
        isLoading:false,
        LoginErrors:null,
        tokenStaff:localStorage.getItem('tokenStaff'),
        isAuth:Boolean(localStorage.getItem('isAuth')) ,
        msg:null,
        Errors:null,
        clients:[],
        employe:[]
    },
    reducers:{
        ClearErrors: (state)=>{
            state.LoginErrors=null
        },
        Logout :(state)=>{
            localStorage.clear()
            state.staff={}
            state.isAuth=false
            state.tokenStaff=null    
        }
    },
    extraReducers:{
       [addStaff.pending]:(state)=>{
        state.isLoading=true
       },
       [addStaff.fulfilled]:(state,{type,payload})=>{
        state.isLoading=false
        state.Staff=payload.newStaff
        state.msg=payload.msg
       },
       [addStaff.rejected]:(state,{type,payload})=>{
        state.Errors=payload
       },
       [GetStaff.pending]:(state)=>{
        state.isLoading=true
       },
       [GetStaff.fulfilled]:(state,{type,payload})=>{
        state.isLoading=false
        state.Staffs=payload
        
       },
       [GetStaff.rejected]:(state,{type,payload})=>{
        state.Errors=payload
       }, 
       [UpdateStaff.pending]:(state)=>{
        state.isLoading=true
       },
       [UpdateStaff.fulfilled]:(state,{type,payload})=>{
        state.staffs=state.staffs.map(el=>(el._id == payload._id)? {...el, ...payload} : el)
            state.isLoading=false
            
       },
       [UpdateStaff.rejected]:(state,{type,payload})=>{
        state.Errors=payload
       },
       [DeleteStaff.pending]:(state)=>{
        state.isLoading=true
       },
       [DeleteStaff.fulfilled]:(state,{type,payload})=>{
        state.staffs= state.staffs.filter(el=> el._id !== payload.deletedStaff._id)
        state.isLoading=false
        state.msg=payload.msg
       },
       [DeleteStaff.rejected]:(state,{type,payload})=>{
        state.Errors=payload
       },
       [SignInStaff.pending]:(state)=>{
        state.isLoading=true
    },
    [SignInStaff.fulfilled]:(state,{type,payload})=>{
        state.isLoading = false
        state.staff = payload.isFound
        state.tokenStaff = payload.tokenStaff
        state.isAuth = true
        localStorage.setItem('tokenStaff',payload.tokenStaff )
        localStorage.setItem('staff',JSON.stringify(payload.isFound) )
        localStorage.setItem('isAuth', true)
       
    },

    [SignInStaff.rejected]:(state,{type,payload})=>{
        state.LoginErrors=payload
    },
    [GETEMAILclient.pending]:(state)=>{
        state.isLoading=true
       },
       [GETEMAILclient.fulfilled]:(state,{type,payload})=>{
        state.isLoading=false
        state.clients=payload
        
       },
       [GETEMAILclient.rejected]:(state,{type,payload})=>{
        state.Errors=payload
       },
       [GETEMAILemploye.pending]:(state)=>{
        state.isLoading=true
       },
       [GETEMAILemploye.fulfilled]:(state,{type,payload})=>{
        state.isLoading=false
        state.employe=payload
        
       },
       [GETEMAILemploye.rejected]:(state,{type,payload})=>{
        state.Errors=payload
       },
    }
})




export default StaffSlice.reducer
export const {Logout,ClearErrors}=StaffSlice.actions