import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import Contentheader from "../../componentes/Contenheader";
import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import APPIInvoke from "../../utils/APPIInvoke";
import swal from "sweetalert";

const  UsuariosAdmin = () => {

    const [usuarios , setUsuarios] = useState([]) 


    const CargarUsuarios = async ()=> {

    const response = await APPIInvoke.invokeGET('/usuarios/')
    console.log(response) 
     setUsuarios(response); 
    
    }

   useEffect(() => { 
    
    CargarUsuarios()
 },[])

    const eliminarUsuario = async (e , idUsuario) =>{
      e.preventDefault() 
       mostarmensaje()
      const response = await APPIInvoke.invokeDELETE('/usuarios/'+idUsuario+' ')
      CargarUsuarios()
    } 
     const mostarmensaje = async () =>   { 
        const msg = "el usuario fue eliminado  exitosamente ";
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
    
    }


    return ( 
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        
         <div className="content-wrapper">
       <Contentheader 
         titulo={'Dashboard'}
         breadcrumb={'Inicio'}
         breadcrumb2={'Dashboard'}
         ruta1={'/Home'}
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
 
            <table className="table table-bordered">
  <thead>
    <tr>
      <th style={{width: '10%'}}>Id</th>
      <th style={{width: '35%'}}>Nombre</th> 
      <th style={{width: '35%'}}>email</th> 
      <th  style={{width: '15%'}}>Acciones</th>
    </tr>
  </thead>
  <tbody> 

    {
       usuarios.map(
        item =>
       <tr  key={item.id} >
       <td> {item.id} </td>
       <td> {item.nombre} </td>
       <td> {item.email} </td>  
    
       <td>
           <Link to={'/UsuariosEditar/'+item.id+'$'+item.nombre+'$'+item.email+''} className=" btn  btn-sm  btn-primary "> Editar</Link>&nbsp;&nbsp;
           <button  onClick={(e)=>eliminarUsuario (e,item.id)} className=" btn  btn-sm  btn-danger "> Eliminar </button>
       </td> 
     </tr>
       )
    

    }
   
  </tbody>
</table>      
  </div>
  
</div>


    </section>
    
       </div>
     <Footer></Footer>
   </div> 
     );
}
 
export default  UsuariosAdmin;