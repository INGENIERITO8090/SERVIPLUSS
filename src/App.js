import React, { Fragment } from "react";
import{BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/crearcuenta";
import Home from "./paginas/Home"; 
import UsuariosAdmin from "./paginas/usuarios/usuariosAdmin";
import UsuariosCrear from "./paginas/usuarios/usuariosCrear";
import UsuariosEditar from "./paginas/usuarios/usuariosEditar";


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
         <Route path="/login" exact element={<Login/>}/> 

         <Route  path="/crearcuenta" exact element={<CrearCuenta/>}  
       ></Route> 


       <Route   path="/Home" exact element={<Home/>}></Route> 
       <Route   path="/Usuarios" exact element={<UsuariosAdmin/>}></Route>
       <Route   path="/UsuariosCrear" exact element={<UsuariosCrear/>}></Route>
       <Route   path="/UsuariosEditar/:idUsuario" exact element={<UsuariosEditar/>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
