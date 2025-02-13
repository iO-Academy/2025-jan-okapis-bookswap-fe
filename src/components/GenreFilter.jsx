export default function GenreFilter ( {genres, onFilterChange}) {
    return (
        <div>
            <label htmlFor="genre">Genre:</label>
            <select
            id="genre" className="border p-0.5 rounded"
            onChange={(e) => onFilterChange(e.target.value)} >

            <option value="">None selected</option>
            {genres.map(genre => (
                <option key={genre} value={genre}>
                    {genre}
                </option>
            ))}
            </select>
        </div>
        )
    }