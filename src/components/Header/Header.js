import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png'
import './Header.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchSeries } from '../../features/movies/movieSlice';

const Header = () => {
    var [searchTxt , setSearchTxt] = useState("")
    const dispatch = useDispatch()
    const searchMovies = (e)=>{
        e.preventDefault()
        if(searchTxt === "") return
        dispatch(fetchMovies(searchTxt))
        dispatch(fetchSeries(searchTxt))
        setSearchTxt("")
        console.log(searchTxt)
    }
    return (
        <div className='header'>
            <Link to= "/">
            <div className='logo'>
                Movie App
            </div>
            </Link>

            <div className='search-box'>
                <form onSubmit={searchMovies}>
                    <input value={searchTxt} placeholder="Search for your favorites" onChange={(e)=>{
                        setSearchTxt(e.target.value)
                    }}></input>
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>
           
            <div className='user-img'>
            <img src={user} alt = ''></img>
            </div>
        </div>
    );
};

export default Header;