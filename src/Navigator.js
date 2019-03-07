import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class Navigator extends Component {
  render() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<button class="navbar-toggler navbar-toggler-right" type="button"
data-toggle="collapse" data-target="#navbarSupportedContent" aria- controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
</button>
<Link class="navbar-brand" to="/">My React Page</Link>
<div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav mr-auto">
<li class="nav-item active">
<Link class="nav-link" to="/">Home</Link>
   </li>
   <li class="nav-item">
<Link class="nav-link" to="/about">About</Link> </li>
<li class="nav-item">
<Link class="nav-link" to="/contact">Contact</Link>
</li> </ul>
 </div>
</nav>
 );
  }
}

export default Navigator;