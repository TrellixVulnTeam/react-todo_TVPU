import React from 'react';
import {Link} from 'react-router';

function About(props){
  return (
    <div>
    <Link to="/">Home</Link>
    <h2>All about me</h2>
    <h3>{this.props.route.name}</h3>
    </div>
  )
}

module.exports = About;
