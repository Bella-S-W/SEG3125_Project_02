import React from "react";

const HouseOfArryn = require("../images/HOUSE OF ARRYN.png");
const HouseOfBaratheon = require("../images/HOUSE OF BARATHEON.png");
const HouseOfLannister = require("../images/HOUSE OF LANNISTER.png");
const HouseOfMartell = require("../images/HOUSE OF MARTELL.png");
const HouseOfStark = require("../images/HOUSE OF STARK.png");
const HouseOfTargaryen = require("../images/HOUSE OF TARGARYEN.png");
const HouseOfTully = require("../images/HOUSE OF TULLY.png");
const HouseOfTyrell = require("../images/HOUSE OF TYRELL.png");



class Family_card extends React.Component{
    render(){
        return(           
        <section id ="services">
        <div className="container text-center">
          <h1 className ="title_service">FAMILY</h1>
          <div className="row  text-center">
            <div className="col-md-3 services">
              <img src={HouseOfArryn} className="service_img"/>
              <h4>HOUSE OF ARRYN</h4>
              <h5>As High as Honor.</h5>
              <a href="#" className="btn btn-secondary">LEARN MORE</a>
            </div>
            <div className="col-md-3 services">
             <img src={HouseOfTully}className="service_img"/>
             <h4>HOUSE OF TULLY</h4>
             <h5>Family, Duty, Honor.</h5>
              <a href="#" className="btn btn-secondary">LEARN MORE</a>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfStark} className="service_img"/>
             <h4>HOUSE OF STARK</h4>
             <h5>Winter Is Coming.</h5>
              <a href="#" className="btn btn-secondary">LEARN MORE</a>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfTargaryen} className="service_img"/>
             <h4>HOUSE OF TARGARYEN</h4>
             <h5>Fire and Blood.</h5>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfBaratheon} className="service_img"/>
             <h4>HOUSE OF BARATHEON</h4>
             <h5>Ours is the Fury.</h5>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfLannister} className="service_img"/>
             <h4>HOUSE OF LANNISTER</h4>
             <h5>A Lannister always pays his debts.</h5>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
           </div>
           <div className="col-md-3 services">
            <img src={HouseOfTyrell} className="service_img"/>
            <h4>HOUSE OF TYRELL</h4>
            <h5>Growing Strong.</h5>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
          </div>
          <div className="col-md-3 services">
            <img src={HouseOfMartell} className="service_img"/>
            <h4>HOUSE OF MARTELL</h4>
            <h5>Unbowed, Unbent, Unbroken.</h5>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
          </div>
          </div>
        </div>
      </section>)
    }
}

export default Family_card;