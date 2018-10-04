import React, { Component } from 'react';
import PropTypes from "prop-types";
import FrameworkContainer from "./components/frameworkContainer/FrameworkContainer.js"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  select: {
      '&:after': {
        borderBottomColor: 'white',
      },
      '&:before': {
        borderBottomColor: 'white'
      }
  }
});

class App extends Component {

  state = {
    frameworks: [],
    sortBy: "stars"
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

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    const { classes } = this.props;

    let counter = 0

    // This will sort the array of frameworks based on the parameter saved in state.
    // It will sort ascending this will be fixed when we map the data to our FrameworkContainers
    this.state.frameworks.sort((a,b) => {
      let valueA = a[this.state.sortBy]
      let valueB = b[this.state.sortBy]

      let comparison = 0;
      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }
      return comparison;
    })
    
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Framework Overview
            </Typography>

              <FormControl style={{ marginLeft: "50px"}}>
                <Select 
                  className={classes.select}
                  style={{ color: "white" }} 
                  value={this.state.sortBy} 
                  onChange={this.handleChange}
                  inputProps={{
                    icon: classes.icon
                  }}
                  >
                  <MenuItem value={"stars"}>Stars</MenuItem>
                  <MenuItem value={"forks"}>Forks</MenuItem>
                  <MenuItem value={"issues"}>Issues</MenuItem>
                </Select>
                <FormHelperText style={{color: "white"}}>What would you like to sort by?</FormHelperText>
              </FormControl>

          </Toolbar>
        </AppBar>
        <div className="container">
          { this.state.frameworks.reverse().map((framework) => {
            counter++
            console.log(counter)
            return ( <FrameworkContainer 
              key={framework.name} 
              position={counter}
              name={framework.name} 
              stars={framework.stars} 
              forks={framework.forks} 
              issues={framework.issues} 
              issuesLink={framework.issuesLink} 
            />)
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
