import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (<nav className="navbar bg-body-tertiary">
        
          <a className="navbar-brand" href="/">Lindosmarket</a>
          <ul>
            <li><a className="nav-theme" href="#Vegetables">Vegetables</a></li>
            <li><a className="nav-theme" href="#Fruits">Fruits</a></li>
            <li><a className="nav-theme" href="#Backery">Backery</a></li>
          </ul>
     
      </nav>);
    }
}
 
export default Navbar;