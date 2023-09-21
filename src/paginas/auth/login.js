import React, { useState,useEffect } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import APPIInvoke from "../../utils/APPIInvoke";
import keys from "../../keys";
import swal from "sweetalert";
import { SignJWT } from "jose";



const Login = () => {

    // para redireccionar 
    const navigate = useNavigate();
    // DEFINIMOS EL ESTADO INICIAL DE  LAS VARIABLES 
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const iniciarSesion = async () => {
        if (password.length < 6) {
            const msg = "la contraseña debe ser almenos de 6 caracteres   ";
            swal({
                icon: 'error',
                buttons: {
                title: 'Error',
                text: msg,
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            const data = {
                email:usuario.email,
                password: usuario.password
            } 
              
            const res = await APPIInvoke.invokeGET('/usuarios?username='+usuario.email+'&password='+usuario.password +'')
            console.log(res)
            console.log(res.length)


            if(res.length !== 0){

                const encoder = new TextEncoder();
                const jwtConstructor = new SignJWT({ data })
                const jwt = await jwtConstructor.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
                    .setIssuedAt()
                    .setExpirationTime('1h').sign(encoder.encode(keys.key));
                console.log(jwt)
               const dt ={
                token:jwt
               } 
               const options = {
                method: 'HEAD',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(dt),
              }
              const url ='http://localhost:3000/login'; 
              fetch(url, options)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Error al enviar los datos al servidor');
                }
                return response.json(); // Si esperas una respuesta JSON del servidor
              })
              .then(dt => {
                console.log('Respuesta del servidor:', dt);
              })
              .catch(error => {
                console.error('Error:', error);
              });
            
               
            

               

        /*         const para = {
                    mesaje: "el token fue creaddo",
                    token: jwt } 
                const res = new Response(para); 
                console.log(para)
               */

                
                
                
        
                navigate('/home')     
                
                setUsuario({
                    email:'',
                    password:'',
                    })  




            }else{
                const msg = "la contraseña y/o password equivocados   ";
                swal({
                    icon: 'error',
                    buttons: {
                    title: 'Error',
                    text: msg,
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                })
            }
            
            
         
     /*              
            const response = await APPIInvoke.invokePOST('/usuarios', data);
            console.log(+response)  */

        }






    
    }


    const onSubmit = (e) => {
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

                                <button type="submit" to={"#"} className="btn btn-block btn-primary">
                                    Ingresar
                                </button>
                                < Link to={"/crearcuenta"} className="btn btn-block btn-danger">
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