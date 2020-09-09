import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideNavbar = () => {

  return (
    <>
        <aside className="sideNavbar">
            <div className="brand navMenu">JVALLEY</div>

            <NavLink className="navMenu" as="div" to="/users" 
            activeClassName="navMenuActive">
                USERS
            </NavLink>

            <NavLink className="navMenu" as="div" to="/register" activeClassName="navMenuActive">
                REGISTER
            </NavLink>
        </aside>

        <style jsx>{`
            .sideNavbar{
                width : 20vw;
                height : auto;
                min-height : 100vh;
                display : flex;
                flex-direction : column;
                justify-content : flex-start;
                align-items : center;
                position : fixed;
                left : 0;
                top : 0;
                background-color : #bebebe;
            }    

            .navMenu {
                width : 100%;
                height : auto;
                padding : 20px;
                display : flex;
                justify-content : center;
                align-items : center;
                text-decoration : none;
                color : black;

            }

            .navMenu:hover{
                background-color : gray;
                color : white;
            }

            .navMenuActive{
                background-color : orange;
                color : white;
            }
            
            
        `}</style>
    </>
  )
}

export default SideNavbar
