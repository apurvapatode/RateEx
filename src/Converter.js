import React from "react";
import Navbar from "./components/Navbar";
import arrows from "./arrows.png"
import Footer from "./components/Footer";
function Converter() {
  return (
    <div>
      <Navbar />
      <div className="text-center container">
        <h2 className="m-3">Currency Converter</h2>
        
          <div className="row g-3 justify-content-center ">
          <div className="col-2">
              <select className="form-select p-3" id="floatingSelectGrid">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-2">
              <input
                type="email"
                className="p-3 form-control"
                id="floatingInputGrid"
              />
            </div>
            <img src={arrows} className="pt-2" style={{width:60,height:50}} alt="" />
            <div className="col-2">
              <input
                type="email"
                className="p-3 form-control"
                id="floatingInputGrid"
              />
            </div>
            <div className="col-2">
              <select className="form-select p-3" id="floatingSelectGrid">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>  
          </div>
        </div>
      
      <Footer/>
    </div>
  );
}

export default Converter;
