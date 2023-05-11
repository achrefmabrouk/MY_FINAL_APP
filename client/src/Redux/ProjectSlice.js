import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

const config={headers:{token:localStorage.getItem('token')}}
const configg={headers:{token:localStorage.getItem('tokenStaff')}}



export const addProject= createAsyncThunk ('Project/addProject',async (newProject, {rejectWithValue})=>{
try {
    console.log(newProject)
     const {data} = await axios.post('/api/project/',newProject,config )
     
     console.log(data)

     return data
} catch (error) {
    return rejectWithValue(error.response.data.message)
}
})

export const GetProject = createAsyncThunk('Project/GetProject',async (_ , {rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/project/',config)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const UpdateProject= createAsyncThunk('Project/UpdateProject',async(UpdatedProject,{rejectWithValue})=>{
    try {
      
        const {data}= await axios.put(`/api/project/${UpdatedProject.id}`,UpdatedProject,config)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})
export const DeleteProject = createAsyncThunk("Project/DeleteProject", async(id,{rejectWithValue})=>{
    try {
        console.log(id)
        const {data} = await axios.delete(`/api/project/${id}`,config)
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})
export const GetProjectEmploye = createAsyncThunk('Project/GetProjectEmploye',async (_ , {rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/project/projectemploye',configg)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})
export const GetProjectClient = createAsyncThunk('Project/GetProjectClient',async (_ , {rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/project/projectclient',configg)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})
 export const ToggleTask= createAsyncThunk('Project/ToggleTask',async(updatedtask,{rejectWithValue})=>{
    try {
        const {data}= await axios.put(`/api/project/tasks/${updatedtask._id}`,updatedtask,config)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
}) 
 






const ProjectSlice = createSlice({
    name:'Project',
    initialState:{
        project:{},
        projects:[],
        isLoading:false,
        Errors:null,
        msg:null,
   
        
    
    },
    reducers:{
        ClearErrors: (state)=>{
            state.Errors=null
           
        }
    },
    extraReducers:{
        [addProject.pending]:(state)=>{
            state.isLoading=true
        },
        [addProject.fulfilled]:(state,{type,payload})=>{
            state.project=payload.newProject
            state.msg=payload.msg
            state.isLoading=false
        },
        [addProject.rejected]:(state,{type,payload})=>{
            state.Errors=payload
        },
        [GetProject.pending]:(state)=>{
            state.isLoading=true
        },
        [GetProject.fulfilled]:(state,{type,payload})=>{
            state.projects=payload
            state.isLoading=false
        },
        [GetProject.rejected]:(state,{type,payload})=>{
            state.Errors=payload
        },
        [UpdateProject.pending]:(state)=>{
            state.isLoading=true
        },
        [UpdateProject.fulfilled]:(state,{type,payload})=>{
            state.projects=state.projects.map(el=>(el._id == payload._id)? {...el, ...payload} : el)
            state.isLoading=false
        },
        [UpdateProject.rejected]:(state,{type,payload})=>{
            state.Errors=payload
        },
        [DeleteProject .pending]:(state)=>{
            state.isLoading=true
        },
        [DeleteProject .fulfilled]:(state,{type,payload})=>{
            state.projects= state.projects.filter(el=> el._id !== payload.deletedProject._id)
            state.isLoading=false
            state.msg=payload.msg
        },
        [DeleteProject .rejected]:(state,{type,payload})=>{
            state.Errors=payload
        },
        [GetProjectEmploye.pending]:(state)=>{
            state.isLoading=true
        },
        [GetProjectEmploye.fulfilled]:(state,{type,payload})=>{
            state.projects=payload
            state.isLoading=false
        },
        [GetProjectEmploye.rejected]:(state,{type,payload})=>{
            state.Errors=payload
        },
        [GetProjectClient.pending]:(state)=>{
            state.isLoading=true
        },
        [GetProjectClient.fulfilled]:(state,{type,payload})=>{
            state.projects=payload
            state.isLoading=false
        },
        [GetProjectClient.rejected]:(state,{type,payload})=>{
            state.Errors=payload
        }/* ,
         [ToggleTask.pending]:(state)=>{
            state.isLoading=true
        },
        [ToggleTask.fulfilled]:(state,{type,payload})=>{
            state.projects=
            state.isLoading=false
        },
        [ToggleTask.rejected]:(state,{type,payload})=>{
            state.Errors=payload
        },  */
    }
})

export default ProjectSlice.reducer
export const {ClearErrors}=ProjectSlice.actions