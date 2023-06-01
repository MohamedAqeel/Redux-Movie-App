import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies,getAllSeries,isLoading } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"

const MovieListing = () => {
    var movies = useSelector(getAllMovies);
    var series = useSelector(getAllSeries);
    let renderMovies = ""
    let renderSeries = ""

    if(movies.Response === "True"){
        console.log("TRUE")
        var listItems =  movies.Search.map((movie , index) => {
            return (<MovieCard key={index} data={movie}></MovieCard>)
        })
        renderMovies = (
            <div className='movie-container'>
               {listItems}
            </div>
            
        )
    }else{
        renderMovies = (
            <div className='movie-error'>
                <h3>
                    {movies.Error}
                </h3>
            </div>
        )
    }

    if(series.Response === "True"){
        console.log("TRUE")
        var listItems =  series.Search.map((serie , index) => {
            return (<MovieCard key={index} data={serie}></MovieCard>)
        })
        renderSeries = (
            <div className='movie-container'>
               {listItems}
            </div>
            
        )
    }else{
        renderSeries = (
            <div className='movie-error'>
                <h3>
                {series.Error}

                </h3>
            </div>
        )
    }
    return (
        <div className='movies-wrapper'>
            <div className='movies-list'>
                <h2>Movies</h2>
                {renderMovies}
            </div>
            <div className='movies-list'>
                <h2>Shows</h2>
                {renderSeries}
            </div>
        </div>
    );
};

export default MovieListing;