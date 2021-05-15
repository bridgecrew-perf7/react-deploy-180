import React, { Component } from 'react';

class Benefits extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4"><img className="img-fluid pd-bot" src={this.props.src} alt="" /></div>
                    <div className="col-sm-8 boxS">
                        <p className="timeline-body boxS"><b>Nội dung: </b>{this.props.content}</p>
                        <p className="timeline-body boxS"><b>Cảm nhận: </b>{this.props.feel}</p>
                        <i className="boxS">Tác giả: <b>{this.props.author}</b></i>
                        <p className="text-muted boxS">Năm: {this.props.year}</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Benefits;