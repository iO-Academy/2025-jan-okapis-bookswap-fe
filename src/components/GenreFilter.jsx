export default function GenreFilter () {
    handle

    return (
        <>
          <label for="genre">Filter by genre:</label>     
            <select name="genre" id="genre">
               <option value="thriller">Thriller</option>
               <option value="romance">Romance</option>
               <option value="historical">Historical</option>
               <option value="non-fiction">Non-fiction</option>
            </select>
        </>
    )
}