import React from "react";
import SimpleForm from "../Components/chatbot/SimpleForm";

const homepage_background = require("../images/homepage_background.png");

class Subscribe_plan extends React.Component{
    render(){
        return (
        <div className="container">
          <SimpleForm/>
          <div className="row">
            <div>
              <h1 className ="title text-center"><b>Game of Thrones</b></h1>
              <a className = " img-center" href="#"><img src ={homepage_background}/></a>
            </div>
          <div className="text-center">
            <h4><b className ="text-center">“Winter is coming.” — Ned Stark</b></h4>
            <h4><b className ="text-center">“You know nothing Jon Snow.”— Ygritte</b></h4>
            <h4><b className ="text-center">“Fear cuts deeper than swords.” — Arya Stark</b></h4>
            <h4><b className ="text-center">“A lion doesn’t concern himself with the opinions of a sheep.” — Tywin Lannister</b></h4>
            <h4><b className ="text-center">“Any man who must say ‘I am the king’ is no true king.” — Tywin Lannister</b></h4>
            <h4><b className ="text-center">“Chaos isn’t a pit. Chaos is a ladder.” — Lord Baelish</b></h4>
            <h4><b className ="text-center">“All men must die, but we are not men.” — Daenerys Targaryen</b></h4>
          </div>
  
          </div>
        </div>

      )
    }
}

export default Subscribe_plan; 