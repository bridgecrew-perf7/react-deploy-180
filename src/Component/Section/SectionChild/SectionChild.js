import React, { Component } from 'react';

class SectionChild extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href={this.props.link}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src={this.props.src} alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.type}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionChild;