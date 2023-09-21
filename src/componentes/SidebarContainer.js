import React  from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Logo from "../../node_modules/admin-lte/dist/img/AdminLTELogo.png"



const SidebarContainer = () => {

        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <Link to={'#'} className="brand-link">
              <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"></img>
              <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>
        
       
            <div className="sidebar">
         
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                 
                </div>
                <div className="info">
                  <Link to={'/home'} className="d-block">Menu principal</Link>
                </div>
              </div>
         <Menu></Menu>
             
        
            </div>
          
          </aside>


        )





}
export default SidebarContainer;