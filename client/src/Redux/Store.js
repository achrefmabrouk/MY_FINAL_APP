import { configureStore } from "@reduxjs/toolkit";
import manager from './ManagerSlice'
import project from './ProjectSlice'
import Staff from './StaffSlice'
//import Task from './TaskSlice'






export const Store = configureStore({
    reducer:{
        manager,
        project,
        Staff 
        
    }
})




