import { useEffect, useState } from "react";
import SingleBook from "../components/SingleBook";
import { Link } from "react-router-dom";
import GenreFilter from "../components/GenreFilter";

export default function Home({claimed}) {
    const [bookInfo, setBookInfo] = useState([])
    const [genres, setGenres] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedGenre, setSelectedGenre] = useState("")

    function getData() {
        const url = `https://book-swap-api.dev.io-academy.uk/api/books?claimed=${claimed}`

        fetch(url)
         .then(res => res.json())
         .then(fetchedInfo => {
            setBookInfo(fetchedInfo.data);
         })
         .catch(error => console.error("Error fetching books", error))
    }

    useEffect(getData, [claimed])

    useEffect(() => {
      fetch('https://book-swap-api.dev.io-academy.uk/api/genres')
      .then(res => res.json())
      .then(genres => {
        setGenres(genres.data);
        console.log(genres.data)
      })
    }, [])

  
    return(
        <div>
          <div>
            <GenreFilter genres={genres}/>
          </div>
  
          <section className="grid grid-cols-1 md:grid-cols-3 max-w[800px]">    
            {bookInfo.map(book => (
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