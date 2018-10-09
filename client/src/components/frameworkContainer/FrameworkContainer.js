import React from 'react'

class FrameworkContainer extends React.Component {

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    addCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m2 offset-m4">
                
                    <h5 style={{borderBottom: "solid black 2px"}}>{`${this.props.position})`} {this.capitalize(this.props.name)}</h5>
                    <ul>
                        {this.props.checkBoxes.showStars ? <li><strong>Stars: </strong>{this.addCommas(this.props.stars)}</li> : null}
                        {this.props.checkBoxes.showForks ? <li><strong>Forks: </strong>{this.addCommas(this.props.forks)}</li> : null}
                        {this.props.checkBoxes.showIssues ?  <li><strong>Issues: </strong><a href={this.props.issuesLink} target="_blank" rel="noopener noreferrer">{this.addCommas(this.props.issues)}</a></li> : null} 
                    </ul>

                </div>
            </div>
        )
    }
}

export default FrameworkContainer