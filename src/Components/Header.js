import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/">
                  <a className="nav-link" href="\">HOME</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Family_card">
                  <a className="nav-link" href="Family_card">FAMILY</a>
                  </Link>
                </li>
              <li className="nav-item"><Link to="/Subscribe_plan">
                <a className="nav-link" href="Subscribe_plan">SUBSCRIBE</a></Link>
              </li>
                <li className="nav-item">
                  <Link to="/Discussion_page">
                  <a className="nav-link" href="Discussion_page">COMMENTS</a>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/Support_page">
                  <a className="nav-link" href="Support_page">SUPPORT</a>
                  </Link>
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