import { useEffect, useState } from "react";
import SingleBook from "../components/SingleBook";
import { Link } from "react-router-dom";

export default function Home({claimed}) {
    const [bookInfo, setBookInfo] = useState([])

    function getData() {
        const url = `https://book-swap-api.dev.io-academy.uk/api/books?claimed=${claimed}`
        // if ({claimed}=1){
        //    url = "https://book-swap-api.dev.io-academy.uk/api/books?claimed=1"
        // }
        // else {
        //     url = "https://book-swap-api.dev.io-academy.uk/api/books?claimed=0"
        // }

        fetch(url)
         .then(res => res.json())
         .then(fetchedInfo => {
            setBookInfo(fetchedInfo.data)
         })
    }

    useEffect(getData, [claimed])

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