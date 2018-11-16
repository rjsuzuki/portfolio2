import React from 'react';

import '../assets/css/ShuffleView.css';
import projectimg1 from '../assets/img/projects/laptop1.png';
import projectimg2 from '../assets/img/projects/laptop2.png';
import projectimg3 from '../assets/img/projects/flappybird.jpg';
import projectimg4 from '../assets/img/projects/laptop4.png';
import projectimg5 from '../assets/img/projects/andy-lg.png';
import projectimg6 from '../assets/img/projects/tux4.png';

import ProjectCard from './ProjectCard';

class ShuffleView extends React.Component {
  render() {
    return (
        <div>
            <div className="shuffle-container row justify-content-center">
                <ProjectCard title="Northern California Karate" info="updated: React + Bootstrap4 + Surge" imgSrc={projectimg1} alt="nck" url="http://norcalkaratedo.org" data-groups='["web"]'/>
                <ProjectCard title="Cygna Energy Services" info="Bootstrap + JS + Spring MVC" imgSrc={projectimg2} alt="cygna" url="http://cygna.net" data-groups='["web"]'/>
                <ProjectCard title="Flappy Bird Clone" info="Unity + C#" imgSrc={projectimg3} url="http://github.com/rjsuzuki/flappybird-clone-demo" alt="flappy" data-groups='["misc"]'/>
                <ProjectCard title="Dotfiles" info="A simple dotfile setup" imgSrc={projectimg4} alt="dotfiles" url="http://github.com/rjsuzuki/dotfiles" data-groups='["misc"]' />
                <ProjectCard title="BART Riderz" info="Dagger2, retrofit, & MVVN with Android Architecture Components" 
                                imgSrc={projectimg5} alt="android" url="http://github.com/rjsuzuki/transit-app" data-groups='["mobile"]' />
                <ProjectCard title="HTMLyo" info="A hackable bash script to generate simple html docs" imgSrc={projectimg6} url="http://github.com/rjsuzuki/htmlyo" data-groups='["misc"]' />
                <ProjectCard title="Youtube-demo" info="React demo with Bootstrap4 and Youtube API" imgSrc='https://i.imgur.com/jsNGvFqm.png' url="https://rjsuzuki.github.io/youtube-demo" />
                <ProjectCard title="IMDB-demo" info="React Redux app with reactstrap and OMDB API" imgSrc='https://i.imgur.com/0pn5pCNm.png' url="https://utopian-music.surge.sh" />           
            </div>
        </div>
    );
  }
}

export default ShuffleView;