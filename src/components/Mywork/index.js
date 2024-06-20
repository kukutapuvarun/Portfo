import React, { useState, useEffect, useRef, useCallback } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';

const Mywork = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const intervalIdRef = useRef(null);
    const slidesRef = useRef([]);

    const slideTexts = [
        [
            "Developed a dynamic Bitcoin trading platform using HTML, CSS, JavaScript, Python, and MySQL. The website offers a sleek and intuitive interface designed to facilitate seamless transactions in the cryptocurrency market. HTML and CSS ensure a clean layout and responsive design, making navigation straightforward for users.",
            "JavaScript provides real-time updates on Bitcoin prices and interactive charts, enhancing the trading experience with live market data. Python powers the backend operations, handling user authentication, transaction processing, and data management securely. It interacts seamlessly with MySQL to store user information and transaction histories, ensuring data integrity and reliability. This platform represents a fusion of robust frontend design and backend functionality, offering users a secure and user-friendly environment to engage in Bitcoin trading confidently. With advanced security measures and user analytics, the website's name is BitBucket."
        ],
        [
            "Developed an interactive car selling platform using HTML, CSS, and JavaScript. The website features a modern and user-friendly interface designed to streamline the process of buying and selling cars. HTML and CSS provide a clean, responsive design, ensuring users can effortlessly navigate the site on any device.",
            "JavaScript enhances the user experience with dynamic elements such as car comparison tools, search filters, and interactive image galleries that showcase vehicles in detail. The platform's interactive features allow users to easily browse through a diverse inventory of cars, view detailed specifications, and compare multiple vehicles side by side. Real-time search filters enable users to quickly find cars that match their preferences, while interactive galleries provide a comprehensive view of each car's exterior and interior. This combination of technologies creates a seamless and engaging car buying experience, making it simple for users to find and purchase their ideal vehicle."
        ],
        [
            "Developed an advanced leaf identification system using machine learning, implemented with Python, HTML, CSS, JavaScript, and Django. The website features a sleek and intuitive interface that allows users to easily identify various plant species by uploading images of leaves. HTML and CSS ensure a clean, responsive design, making the platform accessible and easy to navigate across all devices.",
            "JavaScript enhances interactivity, providing real-time feedback and seamless user interactions throughout the identification process. Python, along with Django, powers the backend operations, managing user authentication, image processing, and machine learning model integration. The system leverages a robust machine learning algorithm to analyze leaf images and accurately identify plant species, offering detailed information about each plant. The Django framework facilitates smooth communication between the frontend and backend, ensuring efficient data processing and storage."
        ],
        [
            "Developed an innovative social networking service app called Sociopedia using the MERN stack, which includes HTML, CSS, JSX, Node.js, Express.js, and MongoDB. Sociopedia features a sleek, modern interface designed to enhance user engagement and interaction. HTML and CSS ensure a clean, responsive design, providing a seamless experience across all devices.",
            "JSX allows for the creation of dynamic and interactive UI components, making the platform engaging and intuitive for users. Node.js and Express.js power the backend operations, handling user authentication, real-time data updates, and API integrations. MongoDB serves as the database, efficiently storing user information, posts, and interactions. This setup ensures fast and reliable data retrieval, enhancing the overall user experience. Sociopedia offers a range of features, including user profiles, friend connections, messaging, and news feeds, all designed to foster a vibrant and connected online community."
        ]
    ];

    const showSlide = useCallback((index) => {
        const slides = slidesRef.current;
        if (index >= slides.length) {
            setSlideIndex(0);
        } else if (index < 0) {
            setSlideIndex(slides.length - 1);
        } else {
            setSlideIndex(index);
        }

        slides.forEach((slide, i) => {
            if (slide) {
                slide.classList.remove('displaySlide');
                if (i === index) {
                    slide.classList.add('displaySlide');
                }
            }
        });
    }, []);

    const nextSlide = useCallback(() => {
        clearInterval(intervalIdRef.current);
        setSlideIndex((prevIndex) => prevIndex + 1);
        intervalIdRef.current = setInterval(() => setSlideIndex((prevIndex) => prevIndex + 1), 10000);
    }, []);

    const prevSlide = () => {
        clearInterval(intervalIdRef.current);
        setSlideIndex((prevIndex) => prevIndex - 1);
        intervalIdRef.current = setInterval(() => setSlideIndex((prevIndex) => prevIndex + 1), 10000);
    };

    useEffect(() => {
        intervalIdRef.current = setInterval(nextSlide, 8000);
        return () => clearInterval(intervalIdRef.current);
    }, [nextSlide]);

    useEffect(() => {
        showSlide(slideIndex);
    }, [slideIndex, showSlide]);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <div className="slider">
                        <div className="slides">
                            <img ref={el => slidesRef.current[0] = el} src={image1} alt="web1" className="slide" />
                            <img ref={el => slidesRef.current[1] = el} src={image2} alt="web2" className="slide" />
                            <img ref={el => slidesRef.current[2] = el} src={image3} alt="web3" className="slide" />
                            <img ref={el => slidesRef.current[3] = el} src={image4} alt="web4" className="slide" />
                        </div>
                            <button class="button" className="prev" onClick={prevSlide}>Prev</button>
                            <button class="button" className="next" onClick={nextSlide}>Next</button>
                        </div>
                    {slideIndex === 0 && <><p className="slide-text">{slideTexts[0][0]}</p><p className="slide-text">{slideTexts[0][1]}</p></>}
                    {slideIndex === 1 && <><p className="slide-text">{slideTexts[1][0]}</p><p className="slide-text">{slideTexts[1][1]}</p></>}
                    {slideIndex === 2 && <><p className="slide-text">{slideTexts[2][0]}</p><p className="slide-text">{slideTexts[2][1]}</p></>}
                    {slideIndex === 3 && <><p className="slide-text">{slideTexts[3][0]}</p><p className="slide-text">{slideTexts[3][1]}</p></>}
                    <a href="https://github.com/kukutapuvarun" className="slide-text flat-button"> Know More </a>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Mywork;
