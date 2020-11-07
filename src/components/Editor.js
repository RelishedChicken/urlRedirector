import React from "react";

class Editor extends React.Component{

  render(){
    return(
      <>
        <h1>Editor</h1>
        <form onSubmit={this.props.update}>
          <label>
            URL:{" "}
            <input type="text" name="url" value={this.props.url}/>
            <input type="submit" value="Update" />
          </label>
        </form>
      </>
    )
  }

}

export default Editor;
