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
                        <li><strong>Stars: </strong>{this.addCommas(this.props.stars)}</li>
                        <li><strong>Forks: </strong>{this.addCommas(this.props.forks)}</li>
                        <li><strong>Issues: </strong><a href={this.props.issuesLink}>{this.addCommas(this.props.issues)}</a></li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default FrameworkContainer