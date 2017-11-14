import React from 'react';
import './Project.css';
import Shuffle from 'react-shuffle';


class Project extends React.Component {
  render() {
    return (
            <Shuffle className="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="shuffle-item item">
                  <div className="panel panel-default">
                    <div className="panel-heading">{this.props.title}</div>
                    <div className="panel-heading">{this.props.info}</div>
                    <div className="panel-body"><a href={this.props.url} target="new"><img src={this.props.imgSrc} alt={this.props.alt} width={300} height={150} mode="fit"/></a></div>
                  </div>
            </Shuffle>
        );
  }
}

export default Project;