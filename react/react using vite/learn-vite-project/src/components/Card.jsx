import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
                alt=""
                className="card-image"
            />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
};

export default Card;
