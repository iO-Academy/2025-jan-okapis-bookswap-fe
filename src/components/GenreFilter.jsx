export default function GenreFilter ( {genres, handleGenreId}) {

    return (
        <div className="flex flex-col items-center text-center mx-auto  gap-2 pt-2 p-5 px-10 md:flex-row md:text-left md:p-5 md:items-start">

            <label htmlFor="genre">Genre:</label>
            <select id="genre" aria-label="Select genre" className="border p-0.5 rounded w-45 md:w-50 lg:w-55 text-base" defaultValue="" onChange={(e) => handleGenreId(e.target.value)}>

            <option value="">No genre selected</option>
            {genres.map(genre => 
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            )}

            </select>
        </div>
        )
    }