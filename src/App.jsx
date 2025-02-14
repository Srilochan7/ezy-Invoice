import React from 'react';
import Hero from './comp/components/hero';
import Features from './comp/components/features'
import Footer from './comp/components/footer';
import InvoiceGenerator from './comp/pages/generate';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './comp/components/navbar';
import Pricing from './comp/pages/pricing'




function App() {
  return (
   <>

<Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Footer/>
        </>
      } />
      <Route path="/generate-invoice" element={<InvoiceGenerator />} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path="/features" element={<Features />} />

    </Routes>

   </>
  );
}

export default App;
