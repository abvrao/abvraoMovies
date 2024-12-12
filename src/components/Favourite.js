import { Link } from "react-router-dom"

function Favourite({ favourite, removeFromFavourite }) {
    return (
        <>
            <div className="text-center">
                {favourite.length === 0 ? (
                    <p className="text-xl uppercase text-orange-500">No Movies in your favourite list</p>
                ) : (
                    <div>
                        {favourite.map(movie => (
                            <Link key={movie.imdbID} tp={`/movie/${movie.imdbID}`}>
                                <div className="mb-8 w-80 text-center rounded-md overflow-hidden">
                                    <img src={movie.Poster} alt={movie.Title} className="w-full h-96" />
                                    <div className="bg-slate-500 py-4">
                                        <h1 className="text-2xl text-orange-500">{movie.Title}</h1>
                                        <h3 className="text-xl text-orange-500">{movie.Year}</h3>
                                        <p className="text-2xl text-orange-500 uppercase">{movie.Type}</p>
                                        <button onClick={() => removeFromFavourite(movie.imdbID)} className="text-white bg-gradient-to-r from-green-500 via-red-600 to-green-700 rounded-lg text-sm px-5 py-3 text-center mb-4 mt-5">Remove</button>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>


                )}

            </div>

        </>
    )

}

export default Favourite;