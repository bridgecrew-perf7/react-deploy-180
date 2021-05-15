import React, { Component } from 'react';

class Benifits extends Component {
    render() {
        return (
            <li className={this.props.li}>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={this.props.src} alt="" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.stt}</h4>
                        <h4 className="subheading">{this.props.main}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{this.props.sub}</p></div>
                </div>
            </li>
        );
    }
}

export default Benifits;