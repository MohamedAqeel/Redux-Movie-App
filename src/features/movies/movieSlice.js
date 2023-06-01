import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/Movieapi"
import {APIKEY} from "../../common/apis/MovieApiKey"

export const fetchMovies = createAsyncThunk('movies/fetchMovies',async (searchTerm)=>{
        var movieTxt = searchTerm === "" ? "Harry" : searchTerm
        console.log(movieTxt)

        var response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieTxt}&type=movie`).catch((err)=> {
            console.log("Error movie list :",err)
        })
        console.log(response)
        return response.data 
})

export const fetchSeries = createAsyncThunk('movies/fetchSeries',async (searchTerm)=>{
    var seriesTxt = searchTerm === "" ? "Friends" : searchTerm
    var response = await movieApi.get(`?apiKey=${APIKEY}&s=${seriesTxt}&type=series`).catch((err)=> {
        console.log("Error series list :",err)
    })
    console.log(response)
    return response.data 
})

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail',async (id)=>{
    console.log("CAME INSIDE fetchMovieDetail")
    var response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&plot=full`).catch((err)=> {
        console.log("Error fetching movie details :",err)
    })
    console.log("FETCH MOVIE DETAIL" , response)
    return response.data 
})


const initialState = {
    movies : {},
    loading : true ,
    series : {},
    movieDetailsLoading : true ,
    movieDetail : {},
}

const movieSlice = createSlice({
    name:"movies",
    initialState ,
    reducers:{
        addMovies : (state , action) => {
            state.movies = action.payload 

        }
    },
    extraReducers:{
        [fetchMovies.pending]:(state )=>{
            state.loading = true
        },
        [fetchSeries.pending]:(state )=>{
            state.loading = true
        },
        [fetchMovies.fulfilled]:(state , action)=>{
            state.movies = action.payload;
            state.loading = false

        },
        [fetchSeries.fulfilled]:(state , action)=>{
            state.series = action.payload;
            state.loading = false
        },
        [fetchMovieDetail.fulfilled]:(state , action)=>{
            state.movieDetail = action.payload;
            state.movieDetailsLoading = false
        },
        [fetchMovieDetail.pending]:(state )=>{
            state.movieDetailsLoading = true
        },
    }
    
})

export const { addMovies } = movieSlice.actions 
export const getAllMovies = (state) => state.movies.movies
export const isLoading = (state) => state.movies.loading
export const getAllSeries = (state) => state.movies.series
export const getMovieDetails = (state) => state.movies.movieDetail
export const isMovieDetailLoading = (state) => state.movies.movieDetailsLoading
export default movieSlice.reducer
