
import { Link } from "react-router-dom"
function MovieList({ movies }) {

    // if movie is not found
    if (movies.length === 0) {
        return <h1 className="text-2xl font-bold text-green-700 uppercase text-center">Movie is not found, search with different name</h1>
    }


    return (
        <>
            <div className="text-white flex flex-wrap gap-10">
                {movies.map(movie => (
                    <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                        <div className="mb-8 w-80 text-center rounded-md overflow-hidden">
                            <img src={movie.Poster} alt={movie.Title} className="w-full h-96"/>
                            <div>
                                <h1 className="text-2xl text-orange-500">{movie.Title}</h1>
                                <h3 className="text-xl text-orange-500">{movie.Year}</h3>
                                <p className="text-2xl text-orange-500 uppercase">{movie.Type}</p>
                            </div>

                        </div>
                    </Link>


                ))}

            </div>

        </>
    )

}

export default MovieList


