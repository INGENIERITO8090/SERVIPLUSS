import React from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import Contentheader from "../../componentes/Contenheader";
import Footer from "../../componentes/Footer";
import { Link } from "react-router-dom";
const  UsuariosCrear = () => {
    return (  
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        
         <div className="content-wrapper">
       <Contentheader 
         titulo={'Creacion'}
         breadcrumb={'Usuarios'}
         breadcrumb2={'Usuarios'}
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
  <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputFile">File input</label>
        <div className="input-group">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="exampleInputFile" />
            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
          </div>
          <div className="input-group-append">
            <span className="input-group-text">Upload</span>
          </div>
        </div>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
   
    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
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
 
export default  UsuariosCrear;