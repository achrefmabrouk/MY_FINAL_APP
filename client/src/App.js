import{BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './Pages/Login';
import Project from './Pages/Project';
import Project2 from './Pages/Project2';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import StaffForm from './Pages/StaffForm';
import ProjectCard from './Pages/projectCard'
import StaffForm2 from './Pages/StaffForm2';
import StaffCard from './Pages/StaffCard';
import LoginStaff from './Pages/LoginStaff';
import HostPage from './Component/HostPage';
import StaffProfil from './Pages/StaffProfil';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectUpdate from './Pages/ProjectUpdate';
import Staffform2Client from './Pages/Staffform2Client';
import EmployeProject from './Pages/EmployeProject';
import ClientProject from './Pages/ClientProject';
import  './App.css'




function App() {
  return (
  <Router>
    <Routes>
      <Route index element={<HostPage/>} />
      <Route path='/Login' element = {<Login/>} />
      <Route path='/Register' element ={<Register/> }/>
      <Route path='/Project' element ={<PrivateRoute><Project/></PrivateRoute> }/>
      <Route path='/Project2' element ={<PrivateRoute><Project2/></PrivateRoute> }/>
      <Route path='/StaffForm' element ={<PrivateRoute><StaffForm/></PrivateRoute> }/>
       <Route path='/ProjectUpdate/:id' element ={<PrivateRoute><ProjectUpdate/></PrivateRoute> }/> 
      <Route path='/ProjectCard' element ={<ProjectCard/>}/>
      <Route path='/StaffCard' element ={<StaffCard/>}/>
      <Route path ='/StaffForm2' element={<StaffForm2/>}/>
      <Route path ='/LoginStaff' element={<LoginStaff/>}/>
      <Route path ='/StaffProfil' element={<StaffProfil/>}/>
      <Route path ='/Staffform2Client' element={<Staffform2Client/>}/>
      <Route path ='/EmployeProject' element={<EmployeProject/>}/>
      <Route path ='/ClientProject' element={<ClientProject/>}/>

    </Routes>
  </Router>
  );
}

export default App;
