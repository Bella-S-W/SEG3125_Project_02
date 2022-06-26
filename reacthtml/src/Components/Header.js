import React from 'react';

const logo = require("../images/logo.png");

class Header extends React.Component {
  render() {
    return (<header>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src ={logo}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link" href="\">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Family_card">FAMILY</a>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="Subscribe_plan">SUBSCRIBE</a>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="Discussion_page">DISCUSSION</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header