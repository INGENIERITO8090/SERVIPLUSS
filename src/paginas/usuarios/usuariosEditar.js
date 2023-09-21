import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import Contentheader from "../../componentes/Contenheader";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../componentes/Footer";
import APPIInvoke from "../../utils/APPIInvoke";

const UsuariosEditar = () => { 

    const navigate = useNavigate ();

   const {idUsuario} = useParams();
    

let array = idUsuario.split('$') 

const id=array[0]
const nombre = array[1]
const email = array [2]

 const [usuario , setUsuario] = useState({
      id:id,
      nombre:nombre,
      email:email

    }) 



const EditarUsuario = async () => {


    let array = idUsuario.split('@') 

    const id=array[0]
    const data ={
    nombre: usuario.nombre,
    email:usuario.email
    }

    const response = await APPIInvoke.invokePUT('/usuarios/'+usuario.id+' ',data)
    console.log(response)
}

const onChange = (e)  =>{
        setUsuario({
               ...usuario,
               [e.target.name]:e.target.value
})
        } 

        const onSubmit =(e) => {
            e.preventDefault(); 
          EditarUsuario()
        }


    return (
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        
         <div className="content-wrapper">
       <Contentheader 
         titulo={'Editar'}
         breadcrumb={'Usuarios'}
         breadcrumb2={'Editar'}
         ruta1={'/Usuarios'}
      />
       <section className="content">
          
    <div className="card">
  <div className="card-header">
    <h3 className="card-title">    <Link to={'/UsuariosCrear'}  className="btn bnt-block btn-primary btn-sm">  Crear usuario </Link></h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
        <i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
        <i className="fas fa-times" />
      </button>
    </div>
  </div>
  <div className="card-body"> 
 <div className="card card-primary">
  <div className="card-header">
    <h3 className="card-title">Quick Example</h3>
  </div>
  <form  onSubmit={onSubmit}>
    <div className="card-body"> 
    <div className="form-group">
        
        <input type="text"  className="form-control" id="nombre" name="nombre" value={nombre} onChange={onChange} />
    </div>
    <div className="form-group">
   
    <input type="text" className="form-control" id="email" placeholder="email" name="email"  value={email} onChange={onChange}/>
     </div>
   
   
    
    </div>
          <button type="submit" className="bnt bnt primary">Editar</button>
  </form>
</div>

  </div>
  
</div>


    </section>
    
       </div>
     <Footer></Footer>
   </div> 





      );
}
 
export default UsuariosEditar;
 
