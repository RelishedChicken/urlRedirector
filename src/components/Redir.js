import React from "react";
import { Route } from 'react-router-dom'

class Redirector extends React.Component{

  componentWillMount(){
    {console.log(this.props.url)}
    window.location = this.props.url;
  }

  render(){
    return(
      <h1>Redirecting you!</h1>
    );
  }

}

export default Redirector;
