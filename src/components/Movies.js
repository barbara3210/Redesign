import React, {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import forrest from "./images/movies/forrest-bl.png"
import guardians from "./images/movies/guardians.png"
import inception from "./images/movies/inception.png"
import pulpf from "./images/movies/pulp-fiction.png"
import mini from "./images/movies/minions.png"
import batman from "./images/movies/batman.png"
import inter from "./images/movies/inter.png"
import toy from "./images/movies/toy.png"

import Card from "./Card";
import Slider from "react-slick"

import './Movies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Movies=()=>{

    const SampleNextArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='next'>
              <i class='fa fa-chevron-right'></i>
            </button>
          </div>
        )
      }
      const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='prev'>
              <i class='fa fa-chevron-left'></i>
            </button>
          </div>
        )
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
          {
            breakpoint: 100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      }

    const cards=[
        {
            id:"1",
            title: 'Pulp Fiction',
            image:pulpf,
            des:'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            time:['19:00','20:30','21:00','22:00'],
            
          },
          {
            id:"2",
            title: 'Guardians of the galaxy',
            image:guardians,
            des:'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
            time:['20:00','20:30','21:00','22:00'],
          },
          {
            id:"3",
            title: 'Despicable Me',
            image:mini,
            des:'When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.',
            time:['15:00','17:30','18:00','19:00'],
          },
          {
            id:"4",
            title: 'Forrest Gump',
            image:forrest,
            des:'The film follows several decades in the life of a slow-witted and kindhearted Alabama man named Forrest Gump (Hanks) and his experiences in the 20th-century United States.',
            time:['19:00','19:30','21:00','22:00'],
          },
          {
            id:"5",
            title: 'Inception',
            image:inception,
            des:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
            time:['19:00','19:30','20:00','22:00'],
        },
          {
            id:"6",
            title: 'The Dark Knight',
            image:batman,
            des:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            time:['19:00','20:30','20:50','22:00'],
          },
          {
            id:"7",
            title: 'Interstellar',
            image:inter,
            des:'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.',
            time:['20:00','21:30','21:50','22:00'],
          },
          {
            id:"8",
            title: 'Toy Story',
            image:toy,
            des:'A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.',
            time:['15:00','17:30','18:00','19:00'],
          },
          
    ];
  

    return(
        <>
    
        <div className='content'>
            <Slider {...settings}>
            {
                cards.map( (c) => <Card 
                key={c.id} 
                image={c.image} 
                title={c.title} 
                des={c.des}
                time={c.time}
                 /> )
            }
            </Slider>
          </div>
               
        </>

    )



}
export default Movies