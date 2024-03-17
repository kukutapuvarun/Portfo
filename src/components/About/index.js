import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass] = React.useState('text-animate');

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a dedicated undergraduate at the esteemed Mahaveer Institute of Science and Technology, my area of specialization lies in Computer Science Engineering, and I am currently progressing through my 4th academic year.
          </p>
          <p align="LEFT">
            Moreover, I am an active participant in continuous learning and development at ARTH - The School of Technologies, an institution renowned for fostering expertise in various technological disciplines.
          </p>
          <p>
            My passion for problem-solving and research fuel my enthusiasm for tackling complex technical challenges. This, combined with my innate aptitude for rapid assimilation of new concepts, empowers me to thrive in dynamic learning environments.
          </p>
          <a href ="https://drive.google.com/file/d/1DlReKtNx39riTMefsHUneD9LPhUjy5Z1/view?usp=drivesdk" attributes-list download className="flat-button"> MY RESUME </a>  
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
//downloadable resume
