import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function Home() {
  return (
  
    <div>
      <Navbar/>
      <div className='text-center'>
      <h2 className='m-5 '>RateEx: Converting Currencies & <br />Charting Changes</h2>
      <div className='container m-5' >
      <a className="mt-3 mx-2 btn btn-outline-secondary" href="/converter" role="button">Converter</a>
      <a className="mt-3 mx-2 btn btn-outline-secondary" href="/charts" role="button">Charts</a>
      </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home