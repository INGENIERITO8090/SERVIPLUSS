import React, { Fragment } from "react";
import{BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/crearcuenta";
import Home from "./paginas/Home"; 

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
         <Route path="/login" exact element={<Login/>}/> 

         <Route  path="/crearcuenta" exact element={<CrearCuenta/>}  
       ></Route> 


       <Route   path="/Home" exact element={<Home/>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
