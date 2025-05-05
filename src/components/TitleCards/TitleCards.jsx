import React, {useEffect,useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {

  const[apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODM3NzM3OGU3ZjcwZmVmMWIwY2Y5NzY1MWUxM2IxZSIsIm5iZiI6MTczOTgwOTcyOC42MDcsInN1YiI6IjY3YjM2M2MwNDFlYTYxMDQ2MjZkZGJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cBHqAubkCfZIYmlCv9wsZYZWxYUUZZIwjljPHNLGiNk'
    }
  };

  

  const handleScroll = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {

      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

      cardsRef.current.addEventListener('wheel', handleScroll);
    }, []);

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div
        className="card-list"
        ref={cardsRef}
      >
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  );
};

export default TitleCards;