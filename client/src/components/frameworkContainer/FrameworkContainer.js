import React from 'react'

class FrameworkContainer extends React.Component {
    render() {
        return (
            <div className="col s12 m3">
                <h5>{this.props.name}</h5>
                <ul>
                    <li><strong>Stars: </strong>{this.props.stars}</li>
                    <li><strong>Forks: </strong>{this.props.forks}</li>
                    <li><strong>Issues: </strong>{this.props.issues}</li>
                </ul>

            </div>
        )
    }
}

export default FrameworkContainer