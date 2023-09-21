import React from "react";
import Navbar from "../componentes/Navbar";
import SidebarContainer from "../componentes/SidebarContainer";
import Contentheader from "../componentes/Contenheader";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      
       <div class="content-wrapper">
     <Contentheader 
       titulo={'Dashboard'}
       breadcrumb={'Inicio'}
       breadcrumb2={'Dashboard'}
       ruta1={'/Home'}
    />
     <section className="content"></section> 
     <div className="container-fluid">
     <div className="row"> 
      <div className="col-lg-3 col-6">
       <div className="small-box  bg-info">  
        <div  className="inner">
          <p>Usuarios</p> 
          <p>&nbsp;</p>
          </div>
      <div className="icon">
          <i className="ion ion-bag"/>
         </div>
        <Link to={'/Usuarios'} className="small-box-footer" > Administrar Usuarios <i className="fas fa-arrow-circke-right"/>  </Link>        

       </div>
     </div>
     </div>
       </div>
     </div>
   <Footer></Footer>
 </div> 

  );
}
export default Home