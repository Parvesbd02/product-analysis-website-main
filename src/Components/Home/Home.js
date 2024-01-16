import React from 'react';
import image from '../../image/photography.jpg'
import person1 from '../../person/p1.jpg'
import person2 from '../../person/p2.jpg'
import person3 from '../../person/p3.jpg'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Welcome Home</h1>
            <div className='home-section sm:grid grid-cols-1'>
                <div className="text-container">
                    <h1>WELCOME TO PHOTOGRAPHY</h1>
                    <h3>YOUR PERSONAL PHOTOGRAPER</h3>
                    <h5>CUPTURING LOVE STORIES AND REAL EMOTION</h5>
                </div>

                <div className="image-container">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="reviews">
                <h2>Reviews</h2>
                <div className="person">
                    <div className="image">
                        <img src={person1} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
                <div className="person">

                    <div className="image">
                        <img src={person2} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>Grow up</p>
                    </div>
                </div>
                <div className="person">
                    <div className="image">

                        <img src={person3} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>Great Work</p>
                    </div>
                </div>
                <Link to='/reviews'>
                    <button className='btn'>For More Reviews </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;