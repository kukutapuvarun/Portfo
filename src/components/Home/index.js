import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import Animatedletters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'V', 'a', 'r', 'u', 'n'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1 className='nametag'>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _12`}>'m</span>

                        <Animatedletters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <Animatedletters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Frontend/Backend Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
