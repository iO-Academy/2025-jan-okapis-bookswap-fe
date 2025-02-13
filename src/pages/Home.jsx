import { useEffect, useState } from "react";
import SingleBook from "../components/SingleBook";
import { Link } from "react-router-dom";
import GenreFilter from "../components/GenreFilter";

export default function Home({claimed}) {
    const [bookInfo, setBookInfo] = useState([])
    const [filteredBooks, setFilterBooks] = useState([])
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState("")

    function getData() {
        const url = `https://book-swap-api.dev.io-academy.uk/api/books?claimed=${claimed}`

        fetch(url)
         .then(res => res.json())
         .then(fetchedInfo => {
            setBookInfo(fetchedInfo.data);

            const bookGenres = [new Set(fetchedInfo.data.map(book => book.genre.name))]
            setGenres(bookGenres)
         })
    }

    useEffect(getData, [claimed])

    function handleFilterChange(genre) {
      setSelectedGenre(genre)
      if (genre === "") {
        setFilterBooks(bookInfo)
      } else {
        setFilterBooks(bookInfo.filter(book => book.genre.name === genre))
      }
      }

    return(
        <div>
          <div>
            <GenreFilter genres={genres} onFilterChange={handleFilterChange} />
          </div>
  
          <section className="grid grid-cols-1 md:grid-cols-3 max-w[800px]">    
            {filteredBooks.map(book => (
                <Link key={book.id} to={`/book/${book.id}`} >
                  <SingleBook
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    genre={book.genre.name}    
                    />  
                </Link> )
            )}
          </section> 
        </div>
    )
  }