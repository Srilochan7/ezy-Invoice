import React from 'react'
import AuthenticatedHero from './authenticated-hero'
import Features from '../components/features'
import Pricing from '../pages/pricing'
import Navbar from '../components/navbar'
import Enterprise from './entrerprise'

function Content() {
  return (
    <div>
    <Navbar/>
      <AuthenticatedHero/>
      <Features/>
      <div id='pricing' className='pricing'><Pricing/></div>
      <div id='enterprise' className='enterprise'> <Enterprise/> </div>
    </div>
  )
}

export default Content
