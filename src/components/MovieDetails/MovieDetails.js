import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail, getMovieDetails, isMovieDetailLoading } from '../../features/movies/movieSlice';
import './../MovieListing/MovieListing.scss'
import './MovieDetails.scss'



const MovieDetails = () => {
    const { imdbID } = useParams()
    console.log(imdbID)
    const dispatch = useDispatch()
    const movieDetails = useSelector(getMovieDetails)
    const isLoading = useSelector(isMovieDetailLoading)

    useEffect(()=>{
        dispatch(fetchMovieDetail(imdbID))
    },[dispatch , imdbID])

    const renderRatingView = (tit,val,icon) => {
        return (
            <div className='single-rating-item'>
                
                <span>
                {tit} <i className={`fa ${icon}`}></i> : {val}
            </span>
            </div>
           
        );
    }

    const renderInfoItem = (tit,val) => {
        return (
            <div className='single-info-item'>
                <div className='info-title'>
                {tit}
                </div>
                <div className='info-value'>
                {val}
                </div>   
            </div>
        );
    }

    
    return isLoading ? (<div className='movie-loading'>
    <h3>
        Loading...
    </h3>
    </div>) : (

        <div className='movie-section'>
            <div className='movie-left'>
            <div className='movie-title'>
                <h1>
                    {movieDetails.Title}
                </h1>
            </div>
            <div className='movie-ratings'>
            {renderRatingView("IMDB Rating",movieDetails.imdbRating,'fa-star')}
            {renderRatingView("IMDB Votes",movieDetails.imdbVotes,'fa-thumbs-up')}
            {renderRatingView("Runtime",movieDetails.Runtime,'fa-film')}
            {renderRatingView("Year",movieDetails.Year,'fa-calendar')}
            </div>
            <div className='movie-description'>
                <p>
                    {movieDetails.Plot}
                </p>
            </div>
            <div className='movie-info'>
            {renderInfoItem("Director",movieDetails.Director)}
            {renderInfoItem("Stars",movieDetails.Actors)}
            {renderInfoItem("Generes",movieDetails.Genre)}
            {renderInfoItem("Languages",movieDetails.Language)}
            {renderInfoItem("Awards",movieDetails.Awards)}

            </div>
            </div>
            <div className='movie-img'>
            <img src={movieDetails.Poster} alt={movieDetails.imdbID}></img>
            </div>
            
        </div>
    );
};

export default MovieDetails;