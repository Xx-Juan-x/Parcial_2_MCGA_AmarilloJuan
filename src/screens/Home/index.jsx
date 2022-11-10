import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
        <div>
          <h2>Amarillo Juan Ignacio</h2>
          <h2>react app</h2>
          <Link to={'/'}>Ir al Layout</Link>
        </div>
  )
}

export default Home