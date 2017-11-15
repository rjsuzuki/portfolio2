import React from 'react';
import './ShuffleView.css';
import Project from './Project.js';
import projectimg1 from '../assets/img/projects/nck-website-small.png';
import projectimg2 from '../assets/img/projects/cygna-site.png';
import projectimg3 from '../assets/img/projects/flappybird.jpg';
import projectimg4 from '../assets/img/projects/dotfiles.jpeg';
import projectimg5 from '../assets/img/projects/andy-lg.png';
import projectimg6 from '../assets/img/projects/tux4.png';

class ShuffleView extends React.Component {
  render() {
    return (
        <div>
            <div className="row shuffle-grid" id="grid">
                <Project title="Northern California Karate" info="Rails + AWS S3 + Heroku + Postgresql" imgSrc={projectimg1} alt="nck" url="http://norcalkaratedo.orgs" data-groups='["web"]'/>
                <Project title="Cygna Energy Services" info="Bootstrap + JS + Spring MVC" imgSrc={projectimg2} alt="cygna" url="http://cygna.net" data-groups='["web"]'/>
                <Project title="Flappy Bird Clone" info="Unity + C#" imgSrc={projectimg3} url="http://github.com/rjsuzuki/flappybird-clone-demo" alt="flappy" data-groups='["misc"]'/>
                <Project title="Dotfiles" info="A simple dotfile setup" imgSrc={projectimg4} alt="dotfiles" url="http://github.com/rjsuzuki/dotfiles" data-groups='["misc"]' />
                <Project title="Untitled Android App" info="android studio + java + kotlin + google API + BART API" 
                                imgSrc={projectimg5} alt="android" url="http://github.com/rjsuzuki/transitapp" data-groups='["mobile"]' />
                <Project title="HTMLyo" info="A hackable bash script to generate simple html docs" imgSrc={projectimg6} url="http://github.com/rjsuzuki/htmlyo" data-groups='["misc"]' /> 
            </div>
        </div>
    );
  }
}

export default ShuffleView;