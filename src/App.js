 import Allcomp from './Allcomp';
import './App.css';
import Applytoteach from './Components/pages/Applytoteach';
import Findteacher from './Components/pages/Findteacher';
import Groupclasses from './Components/pages/Groupclasses';
import Login from './Components/pages/Login';
import Signup from './Components/pages/Signup';
import {  Routes, Route } from "react-router-dom";
import Header from './Components/Header';


function App() {
  return (
    <div>
       <Header/>  
          <Routes>
          <Route path="/"  element={<Allcomp/>}/>
          <Route index element={<Allcomp />} />
          <Route path="Groupclasses" element={<Groupclasses />} />
          <Route path="Findteacher" element={<Findteacher />} />
          <Route path="Applytoteach" element={<Applytoteach />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
      </Routes>
     
     
    </div>
  );
}

export default App;
