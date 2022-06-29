import React from "react";
import SimpleForm from "../Components/chatbot/SimpleForm";

// const homepage_background = require("../images/homepage_background.png");

class Subscribe_plan extends React.Component{
  render(){
      return(           
      <section id ="services">
      <div className="container text-center">
        <h1 className ="title_service">SUBSCRIBE</h1>
        <div className="row  text-center">
          <div className="col-md-3 services">
            <h4>Plan A</h4>
            <h5>Balbalbal</h5>
            <a href="#" className="btn btn-secondary">Deatils</a>
          </div>
          <div className="col-md-3 services">
           <h4>Plan B</h4>
           <h5>Balbalbal</h5>
            <a href="#" className="btn btn-secondary">Deatils</a>
         </div>
         <div className="col-md-3 services">
           <h4>Plan C</h4>
           <h5>Balbalbal</h5>
            <a href="#" className="btn btn-secondary">Deatils</a>
         </div>
         <div className="col-md-3 services">
           <h4>Plan D</h4>
           <h5>Balbalbal</h5>
            <a href="#" className="btn btn-secondary">Deatils</a>
         </div>
         
        </div>
        <SimpleForm/>
      </div>
    </section>)
  }
}

export default Subscribe_plan; 