import { useState } from "react"

function SearchBar({onSearch}) {

    const[searchTerm, setSearchTerm] = useState('');
    const handleSearch  = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    }


    return (
        <form onSubmit={handleSearch}>

            <input 
             type="text"
             placeholder="Search your movie"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="border outline-none rounded px-4 py-2 text-black w-60"
            />

            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md text-xl px-4 py-2 ms-2">Search</button>

        </form>
    )



}

export default SearchBar