import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import APPIInvoke from "../../utils/APPIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {

const [ usuario,setUsuario] =useState({
 
 nombre:'',
 email:'',
 password:'',
 confirmar:''

 
});

const {nombre,email,password,confirmar } = usuario;



const crearCuenta = async() => { 

        if (password !== confirmar){
            const msg = "las contraseñas son diferentes";
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
        }else if (password.length<6){
            const msg = "la contraseña debe ser de minimo 6 caracteres ";
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
        }
        else {
            const data ={
                nombre : usuario.nombre,
                email : usuario.email,
                password : usuario.password
               }
               const response  = await APPIInvoke.invokePOST('/usuarios',data); 
               console.log(response) 
               const mensaje =' ' 
               // mensaje de usuario ya registrado   
               if (  mensaje === 'El usuario ya existe'){ 
                const msg = "el usuario ya existe";
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
                } else {
                    const msg = "el usuario fue creado exitosamente ";
                swal({
                 title:'Informacion',
                 text:msg ,
                 icon:'success',
                 buttons:{ 
                     confirm: {
                    text: 'Ok',
                    value: true , 
                    visible : true , 
                    className :'btn btn-primary',  
                    closeModal : true
                     }
                 }
                }); 



                setUsuario({
                nombre:' ',
                email:' ',
                password:' ',
                confirmar:' '



                })


                }

        }
   
}


const onChange = (e)  =>{
setUsuario({
       ...usuario,
       [e.target.name]:e.target.value
})
}
const onSubmit =(e) => {
    e.preventDefault(); 
    crearCuenta();

}

    return ( 
        <div className ="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
                <Link to={"#"}><b>Crear Cuenta </b>Serviplus</Link>
            </div>

            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Bienvenido  ingrese su credenciales</p>
                    <form onSubmit={onSubmit} >
                    <div className="input-group mb-3">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Ingresa Tu nombre completo" 
                            id="nombre"
                            value={nombre}
                            onChange={onChange}
                            name="nombre"/>
                          
                        </div>
                       
                       
                        <div className="input-group mb-3">
                            <input type="email"
                             className="form-control" 
                             placeholder="Correo Electronico" 
                             id="email"
                             value={email}
                             onChange={onChange}
                             name="email"/>
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
                            value={password}
                            onChange={onChange}
                            name="password"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div> 
                        <div className="input-group mb-3">
                            <input type="password" 
                            className="form-control" 
                            placeholder="Confirmar contraseña" 
                            id="confirmar"
                            value={confirmar}
                            onChange={onChange}
                            name="confirmar"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>

                    <div className="social-auth-links text-center mb-3">
    
                        <button type="submit"  to={"#"} className="btn btn-block btn-primary">
                             Crear Cuenta 
                        </button>
                      
                    </div>
                
                    </form>
                </div>
               
            </div>
        </div>







    </div>);
    
}
 
export default CrearCuenta ;