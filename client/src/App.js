import React, { Component } from 'react';
import FrameworkContainer from "./components/frameworkContainer/FrameworkContainer.js"

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <FrameworkContainer />
          <FrameworkContainer />
          <FrameworkContainer />
          <FrameworkContainer />
        </div>
      </div>
    );
  }
}

export default App;
