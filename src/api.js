import axios from "axios";
const API_KEY = "27ab8123";
const API_URL = "https://www.omdbapi.com/";

export const SearchMovie = async (searchTerm, type = "") => {
    try {
        const response = await axios.get(`${API_URL}?s=${searchTerm}&type=${type}&apikey=${API_KEY}`);
        return response.data;

    } catch(error){
        console.log("Error while fetching the movie data", error);
        return []
    }

}


export const MovieDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
        return response.data;
    } catch(error){
        console.log("Error fetching the movie data", error)
        return []
    }
}








