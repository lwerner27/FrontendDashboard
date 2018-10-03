import React, { Component } from 'react';
import FrameworkContainer from "./components/frameworkContainer/FrameworkContainer.js"

class App extends Component {

  state = {
    frameworks: []
  }

  componentDidMount() {
    let url = "https://api.github.com/repos/"
    let repoInfo = [
      "angular/angular",
      "facebook/react",
      "emberjs/ember.js",
      "vuejs/vue"
    ]

    repoInfo.forEach((repo) => {
      fetch(`${url}${repo}`)
      .then((res) => res.json())
      .then((data) => {
        let frameworks = this.state.frameworks
        let frameworkData = {
          name: data.name,
          stars: data.stargazers_count,
          forks: data.forks,
          issues: data.open_issues,
          issuesLink: `https://github.com/${repo}/issues`
        }
        frameworks.push(frameworkData)
        this.setState({frameworks: frameworks})
        
      })
    })
  }
  
  render() {
    
    return (
      <div className="container">
        <div className="row center">
          { this.state.frameworks.map((framework) => {
            return <FrameworkContainer name={framework.name} stars={framework.stars} forks={framework.forks} issues={framework.issues} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
