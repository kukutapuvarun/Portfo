import { Link, Outlet } from 'react-router-dom'
import './index.scss'
import { useState } from 'react';
import Animatedletters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    const{letterClass, setletterClass} = useState('text-animate')
    const nameArray=[' ', 'V', 'a', 'r', 'u' , 'n']
    const jobArray=['W', 'e', 'b', ' ','D','e','v','e','l','o','p','e','r','.']

    return(
        <>
        <div>
        <div className="container home-page">
            <div className="text-zone">
                
                <h1 className='nametag'>
                <span className={letterClass}>H</span>
                <span className={letterClass}>i,</span>    
                <br /> 
                <span className={'${letterClass} _12'}>I</span>
                <span className={'${letterClass} _12'}>'m</span>

                <Animatedletters letterClass={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <br />
                <Animatedletters letterClass={letterClass}
                strArray={jobArray}
                idx = {22} />
                </h1>
                <h2>Frontend/Backend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        </>
    )
};

export default Home