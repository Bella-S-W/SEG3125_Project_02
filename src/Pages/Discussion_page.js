import React from "react";
import Comments from '../Components/comment/comments';

class Discussion_page extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center">
              <h1 className ="title_service">COMMENTS</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Comments/> 
        </div>           
        </section>)
        
    }
}

export default Discussion_page;