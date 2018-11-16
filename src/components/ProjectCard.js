import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
    render() {
        return(
        <div className="project-card">
            <div className="projject-img"><a href={this.props.url}><img src={this.props.imgSrc} alt={this.props.alt} /></a></div>
            <div className="project-title"><h3><b>{this.props.title}</b></h3></div>
            <div className="project-info">{this.props.info}</div>
        </div>
        );    
    }
}

export default ProjectCard;