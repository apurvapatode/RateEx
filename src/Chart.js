import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Chart() {
  return (
    <div>
        <Navbar/>
        <div className=' text-center'>
            <h2 className='m-3'>Currency Charts</h2>
            <div className='row justify-content-center'>
            <div className="col-2 ">
              <select className="form-select p-2 justify-content-center" id="floatingSelectGrid">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Chart