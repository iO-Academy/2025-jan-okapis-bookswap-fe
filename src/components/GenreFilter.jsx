export default function GenreFilter ( {genres, onFilterChange}) {
    return (
        <div className="flex flex-col 
        items-center text-center mx-auto 
        gap-2 pt-2 p-5 px-10 
        md:flex-row md:text-left md:p-5 md:items-start">
            <label htmlFor="genre">Genre:</label>
            <select
            id="genre"
            aria-label="Select genre" 
            className="border p-0.5 rounded w-40 md:w-50 lg:w-55 text-base"
            onChange={(e) => onFilterChange(e.target.value)} 
            defaultValue="">

            <option value="" disabled>Choose a genre</option>
            {genres.map(genre => (
                <option key={genre} value={genre}>
                    {genre}
                </option>
            ))}
            </select>
        </div>
        )
    }