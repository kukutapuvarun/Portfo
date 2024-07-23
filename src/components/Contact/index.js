import { useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ttbc5ne', 'template_jbzv9ge', form.current, 'aH0m_pWUx4-H6zZ8c')
      .then(
        () => {
          alert('Message successfully sent!')
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
              I am interested in job opportunities. If you have any requests or questions, please feel free to contact me at
              <a href="mailto:kukutapuvarun33@gmail.com"> kukutapuvarun33@gmail.com </a>. Don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                <div className="wave-group">
                <input type="text" className="input" name="user_name" required />
                <span className="bar"></span>
                <label className="label">
                  <span className="label-char" style={{ '--index': 0 }}>N</span>
                  <span className="label-char" style={{ '--index': 1 }}>a</span>
                  <span className="label-char" style={{ '--index': 2 }}>m</span>
                  <span className="label-char" style={{ '--index': 3 }}>e</span>
                </label>
              </div>
                </li>
                <li className="half">
                <div className="wave-group">
                <input type="email" className="input" name="user_email" required />
                <span className="bar"></span>
                <label className="label">
                  <span className="label-char" style={{ '--index': 0 }}>E</span>
                  <span className="label-char" style={{ '--index': 1 }}>m</span>
                  <span className="label-char" style={{ '--index': 2 }}>a</span>
                  <span className="label-char" style={{ '--index': 3 }}>i</span>
                  <span className="label-char" style={{ '--index': 4 }}>l</span>
                </label>
              </div>
                </li>
                <li>
                  <input
                    className='sub'
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact