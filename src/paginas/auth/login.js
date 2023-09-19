import React, { useState,useEffect } from "react";
import { Await, Link,useNavigate } from "react-router-dom"; 
import APPIInvoke from "../../utils/APPIInvoke";
import swal  from "sweetalert"; 
import { jwt } from "jose";
import { SignJWT } from "jose";
const Login = () => { 
       
// para redireccionar 
const navigate = useNavigate(); 


// DEFINIMOS EL ESTADO INICIAL DE  LAS VARIABLES 
const [usuario,setUsuario] = useState({     
    email:'',
    password:''
}) ; 
    
 
const {email,password } = usuario;

const onChange = (e) =>{
setUsuario({
...usuario,
[e.target.name]: e.target.value 
})
}



const iniciarSesion= async () =>{

if(password.length< 6){
    const msg = "la contraseña debe ser almenos de 6 caracteres   ";
    swal({
     title:'Error',
     text:msg ,
     icon:'error',
     buttons:{ 
         confirm: {
        text: 'Ok',
        value: true , 
        visible : true , 
        className :'btn btn-danger',  
        closeModal : true
         }
     }

    });
}else {
    const data ={

        email : usuario.email,
        password : usuario.password
       
    }
     

    const jwt = require('jsonwebtoken');
    // Create a payload
 
    // Sign the token
    const secret = "secret";
    const token = jwt.sign(data, secret);
    // Send the token
    console.log(token);
    

/* 
     const jwt = await new SignJWT({data}, 'secretkey', (Error,token) =>{
        response.json({
         token
        })
       } )
       console.log(jwt) */ 
       navigate('/home')

       const response  = await APPIInvoke.invokePOST('/usuarios',data); 
       console.log(+response) 


}






}



const onSubmit =(e) => {
    e.preventDefault(); 
    iniciarSesion();

}





    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Inicio session</b>Serviplus</Link>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bienvenido  ingrece su credenciales</p>
                        <form onSubmit={onSubmit} >
                            <div className="input-group mb-3">
                                <input type="email"
                                 className="form-control" 
                                 placeholder="Correo Electronico" 
                                 id="email"
                                 name="email"
                                 value={email}
                                 onChange={onChange}
                                 required
                                 />
                                
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" 
                                className="form-control" 
                                placeholder="Contraseña" 
                                id="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                required
                                
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                        <div className="social-auth-links text-center mb-3">
        
                            <button type="submit"  to={"#"} className="btn btn-block btn-primary">
                                 Ingresar  
                            </button>
                            < Link to={"/crearcuenta"}className="btn btn-block btn-danger">
                                Crear Cuenta
                            </Link>
                        </div>
                    
                        </form>
                    </div>
                   
                </div>
            </div>







        </div>);
}

export default Login; 