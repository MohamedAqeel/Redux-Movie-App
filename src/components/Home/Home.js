import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchSeries, isLoading } from '../../features/movies/movieSlice';
import "../MovieListing/MovieListing.scss"

const Home = () => {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)

    useEffect(() => {
        dispatch(fetchMovies(""))
        dispatch(fetchSeries(""))
    },[dispatch])
    return loading ? (<div className='movie-loading'>
             <h3>
                 Loading...
             </h3>
             </div>) : (
        <div>
        <div className='banner-img'></div>
        <MovieListing></MovieListing>
        </div>
    );
};

export default Home;