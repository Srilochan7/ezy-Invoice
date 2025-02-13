import React from 'react';
import Hero from './comp/components/hero';
import Features from './comp/components/features'
import Footer from './comp/components/footer';
import Generate from './comp/pages/generate';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
   <>

<Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Features />
          <Footer/>
        </>
      } />
      <Route path="/generate" element={<Generate />} />

    </Routes>

   </>
  );
}

export default App;
