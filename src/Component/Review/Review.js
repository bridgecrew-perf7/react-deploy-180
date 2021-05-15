import React, { Component } from 'react';
import ReviewChild from './ReviewChild/ReviewChild'

class ReviewFull extends Component {
    render() {
        return (
            <div>
                {/* Modal 1*/}
                <div className="portfolio-modal modal fade" id={this.props.review} tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div className="container">
                                {<ReviewChild src={this.props.fsrc1} content={this.props.fcontent1} feel={this.props.ffeel1} author={this.props.fauthor1} year={this.props.fyear1} />}
                                {<ReviewChild src={this.props.fsrc2} content={this.props.fcontent2} feel={this.props.ffeel2} author={this.props.fauthor2} year={this.props.fyear2} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewFull;