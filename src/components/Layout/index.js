import React from "react";
//import styles from "./layout.module.css";
import { Link } from 'react-router-dom';
//import Home from './screens/Home';


//Armo mi layout
const Layout = ({children}) => {
    return (
      <body>
          <header>
              <h1>Layout</h1>
              <nav>
                <button><Link to={'/Home'}>Home</Link></button>
                <button><Link to={'/Recursos'}>Products</Link></button>
              </nav>
          </header>
          <section>
            <div>
                {children}
            </div>
          </section>
          <footer>
            <p>MCGA 2022</p>
          </footer>
      </body>
    )
}
export default Layout