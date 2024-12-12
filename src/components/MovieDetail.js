
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../api";

function MovieDetail({favourite, addToFavourite}) {

    const {id} = useParams();
    const[movie, setMovie] = useState(null);
    const[error, setError] = useState(null);

    // fethc the movie details from the api

    useEffect (() => {
        const movieDetail = async () => {
            try {
                const data= await MovieDetails(id);
                setMovie(data)

            } catch (error){
                setError("faild to fetch the movie details")
            }
        }
        movieDetail();
    }, [id])

    //condition if data is loading

    if(!movie){
        return <h1 className="text-4xl font-bold text-center p-4 text-orange-500">Data is loading please wait</h1>
    }

    if(error){
        return <h1 className="text-2xl text-green-200">Error: {error}</h1>
    }

    // check if the movie is already in fav
    const isFavourite = favourite && movie.imdbId ? favourite.some(fav => fav.imdD === movie.imdbId) : false;


    return (
        <div className="">
            <img src={movie.Poster} alt={movie.Title}/>
            <div>
                <h1 className="text-2xl mt-4">{movie.Title}</h1>
                <h2 className="text-2xl mt-4">Year: {movie.Year}</h2>
                <h3 className="text-2xl mt-4">Genre: {movie.Genre}</h3>
                <h4 className="text-2xl mt-4">Plot: {movie.plot}</h4>
                <h5 className="text-2xl mt-4">Cast: {movie.Actors}</h5>
                <p>Add to Favourite: <button onClick={() => addToFavourite(movie)} className={`font-bold py-2 px-4 rounded ${isFavourite ? "text-yellow-500" : "text-green"}`}>***</button></p>
            </div>

        </div>
    )
}

export default MovieDetail