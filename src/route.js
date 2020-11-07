import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mysql from "mysql";

//components
import Editor from "./components/Editor";
import Redirector from "./components/Redir";

class UrlRedirect extends React.Component{

  state = {
    url: "",
    redirectable: false
  }

  updateUrl = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
    this.updateDatabase(e.target[0].value);
  }

  updateDatabase(data){
    //https://kunet.kingston.ac.uk/k1625608/updateUrls/updateUrl.php?URL=https://www.bing.com
    var response = fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/updateUrl.php?URL="+data);
  }

  readFromDatabase(){
    //https://kunet.kingston.ac.uk/k1625608/updateUrls/getUrls
    fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/getUrls.php")
      .then(response=>response.json())
      .then((jsonData) => {
        console.log(jsonData[0].url_value);
        this.setState({
          url: jsonData[0].url_value,
          redirectable: true
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    if(this.state.redirectable){
      return(
        <div>
          <Router>
            <Switch>
              <Route basename="/urlRedirector" path="/" >
                <Redirector url={this.state.url} />
              </Route>
              <Route basename="/urlRedirector" path="/edit" >
                <Editor update={this.updateUrl} />
              </Route>
            </Switch>
          </Router>
        </div>
      )
    }else{
      this.readFromDatabase();
      return(<h1>Loading...</h1>);
    }
  }
}

export default UrlRedirect
