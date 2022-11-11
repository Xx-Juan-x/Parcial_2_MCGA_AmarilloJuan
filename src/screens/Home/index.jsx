import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {

  return (
        <div>
          <h2>Amarillo Juan Ignacio</h2>
          <h2>react app</h2>
          <button className={styles.volver}><Link className={styles.decoration} to={'/'}><span>Volver</span></Link></button>
        </div>
  )
}

export default Home