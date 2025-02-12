import { useEffect, useState } from "react";
import SingleBook from "../components/SingleBook";
import { Link } from "react-router-dom";

export default function Home() {
    const [bookInfo, setBookInfo] = useState([])

    function getData() {
        let url = "https://book-swap-api.dev.io-academy.uk/api/books"

        fetch(url)
         .then(res => res.json())
         .then(fetchedInfo => {
            setBookInfo(fetchedInfo.data)
         })
    }

    useEffect(getData, [])

    return(
      <section className="grid grid-cols-1 md:grid-cols-3 max-w[800px]">    
        {bookInfo.map(function (book) {
            return (
            <Link key={book.id} to={`/book/${book.id}`} >
              <SingleBook
                title={book.title}
                author={book.author}
                image={book.image}
                genre={book.genre.name}    
              />  
            </Link> )
        })}
      </section> 
    )
}