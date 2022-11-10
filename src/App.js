import React from 'react';
import { /*Navigate*/ Route, Routes } from 'react-router-dom';
// Traigo mi Layout a la app
import Layout from './components/Layout';
import Home from './screens/Home'
import Products from './screens/Recursos'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Recursos" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
