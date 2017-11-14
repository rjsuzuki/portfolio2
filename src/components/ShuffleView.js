import React from 'react';
import './ShuffleView.css';
import Project from './Project.js';
import projectimg1 from '../assets/img/projects/nck-website-small.png';
import projectimg2 from '../assets/img/projects/cygna-site.png';

class ShuffleView extends React.Component {
  render() {
    return (
        <div>
            <div className="row shuffle-grid" id="grid">
                <Project title="Northern California Karate" info="Rails + AWS S3 + Heroku + Postgresql" imgSrc={projectimg1} alt="nck" url="http://norcalkaratedo.orgs" data-groups='["web"]'/>
                <Project title="Cygna Energy Services" info="Bootstrap + JS + Spring MVC" imgSrc={projectimg2} alt="cygna" url="http://cygna.net" data-groups='["web"]'/>
                <Project title="Flappy Bird Clone" info="Unity + C#" imgSrc="http://placehold.it/300x100" url="http://github.com/rjsuzuki/flappybird-clone-demo" alt="flappy" data-groups='["misc"]'/>
                <Project title="Dotfiles" info="A simple dotfile setup" imgSrc="http://placehold.it/300x100" alt="dotfiles" url="http://github.com/rjsuzuki/dotfiles" data-groups='["misc"]' />
            </div>
        </div>
    );
  }
}

export default ShuffleView;