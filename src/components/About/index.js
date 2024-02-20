import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import TagCloud from 'TagCloud'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
        </div>
      </div>

      <div>
      const TextShpere = () = {
        useEffect(() => {
          return () => {
            const container = ".tagcloud";
            const texts = [
              "HTML5",
              "CSS3",
              "SCSS",
              "JavaScript",
              "ReactJs",
              "Spring",
              "Java",
              "NodeJs",
              "MySQL",
              "PHP",
              "C++",
              "GIT",
              "ML",
              "Python",
              "DSA",
            ];

          const options = {
              radius: 300,
              maxSpeed: "fast",
              initSpeed: "fast",
              keep: true,
          };

          TagCloud(container, texts, options);
          };
          }, [])};

        return (
          <>
            <div className="text-shpere">
              {/* span tag className must be "tagcloud"  */}
              <span className="tagcloud"></span>
            </div>
          </>
        );;

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About