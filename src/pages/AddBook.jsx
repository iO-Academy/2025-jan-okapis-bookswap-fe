export default function AddBook() {
    return (
        <div className="flex justify-center">
            <form className="flex flex-col
            p-4 w-xl">
                <label className="mt-2 mb-1" htmlFor="title">Title (required)</label>
                <input className="px-1 border-[1px]" type="text" placeholder="Title" name="title" id="title" />
                <label className="mt-2 mb-1" htmlFor="author">Author (required)</label>
                <input className="px-1 border-[1px]" type="text" placeholder="Author" name="author" id="author" />
                <label className="mt-2 mb-1" htmlFor="year">Year</label> 
                <input className="px-1 border-[1px]" type="number" placeholder="2000" name="year" id="year" />
                <label className="mt-2 mb-1" htmlFor="pageCount">Page count</label>
                <input className="px-1 border-[1px]" type="number" placeholder="0" name="pageCount" id="pageCount" />
                <label className="mt-2 mb-1" htmlFor="imageURL">Image URL</label>
                <input className="px-1 border-[1px]" type="url" placeholder="Image URL" name="imageURL" id="imageURL" />
                <label className="mt-2 mb-1" htmlFor="blurb">Blurb</label>
                <textarea className="px-1 border-[1px] h-[150px]" placeholder="Blurb" name="blurb" id="blurb"></textarea>
                <label className="mt-2 mb-1" htmlFor="addBook"></label>
                <input className="px-1 border-[1px]" type="submit" value="Add book" name="addBook" id="addBook" />
            </form>
        </div>
    )
}