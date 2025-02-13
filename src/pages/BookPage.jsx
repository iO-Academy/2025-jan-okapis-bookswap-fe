import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import { useEffect, useState } from "react";
import BookReview from "../components/BookReview";

export default function BookPage() {
    
    const {id} = useParams()
    const [bookDetails, setBookDetails] = useState("")
    const [bookGenre, setBookGenre] = useState("")

    function getBookDetails() {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then(response => response.json())
            .then(details => {
                setBookDetails(details.data)
                setBookGenre(details.data.genre.name)
            })
    }   

    useEffect(getBookDetails, [])
    
    return(
        <div>
            <BookDetail 
               key={bookDetails.id}
               image={bookDetails.image}
               alt={bookDetails.title} 
               title={bookDetails.title}
               author={bookDetails.author}
               year={bookDetails.year}
               page_count={bookDetails.page_count}
               genre={bookGenre}
               blurb={bookDetails.blurb} />
            <BookReview
               key={bookDetails.reviews.id}
               name={bookDetails.reviews.name}
               rating={bookDetails.reviews.rating}
               review={bookDetails.reviews.review} />
        </div>
    )
}