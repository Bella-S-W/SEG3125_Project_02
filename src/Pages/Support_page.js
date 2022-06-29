import React from "react";
import SimpleForm from "../Components/chatbot/SimpleForm";

// const homepage_background = require("../images/homepage_background.png");

class Support_page extends React.Component{
  render(){
      return(           
      <section id ="services">
      <div className="container text-center">
        <h1 className ="title_service">SUPPORT</h1>
        <div className="row  text-center">
          <div className="col-md-6 services">
            <h4><b>Game of Thrones Offical page</b></h4>
            <h5>Your Guide to Game of Thrones</h5>
            <a href="https://www.hbo.com/game-of-thrones" className="btn btn-secondary">Deatils</a>
          </div>
          <div className="col-md-6 services">
           <h4><b>Game of Thrones Rotten Tomates</b></h4>
           <h5>Score of Game of Thrones</h5>
            <a href="https://www.rottentomatoes.com/tv/game_of_thrones" className="btn btn-secondary">Deatils</a>
         </div>
         <div className="col-md-6 services">
           <h4><b>Game of Thrones Facebook</b></h4>
           <h5>Join the Game of Thrones's Facebook communicity</h5>
            <a href="https://www.facebook.com/GameOfThrones/" className="btn btn-secondary">Deatils</a>
         </div>
         <div className="col-md-6 services">
           <h4><b>Game of Thrones wiki</b></h4>
           <h5>Welcome to the Game of Thrones Wiki</h5>
            <a href="https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki" className="btn btn-secondary">Deatils</a>
         </div>

         <div className="col-md-6 services">
           <h4><b>Game of Thrones on Crave</b></h4>
           <h5>Start Watching now</h5>
            <a href="https://www.crave.ca/en/tv-shows/game-of-thrones" className="btn btn-secondary">Deatils</a>
         </div>

         <div className="col-md-6 services">
           <h4><b>Game of Thrones Reddit</b></h4>
           <h5>A Reddit of Ice and Fire</h5>
            <a href="https://www.reddit.com/r/gameofthrones/" className="btn btn-secondary">Deatils</a>
         </div>
         
        </div>
        <SimpleForm/>
      </div>
    </section>)
  }
}

export default Support_page; 