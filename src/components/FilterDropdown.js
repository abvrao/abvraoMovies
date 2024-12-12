
function FilterDropdown({onFilterChange}) {

    return (
        <select onChange={(e) => onFilterChange(e.target.value)} className="text-black">
            <option value= "">All</option>
            <option value="movie">Movies</option>
            <option value = "series">Series</option>
        </select>
    )

}

export default FilterDropdown