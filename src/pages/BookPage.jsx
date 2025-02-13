import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import { useEffect, useState } from "react";
import BookReview from "../components/BookReview";
import H5 from "../components/atoms/H5";

export default function BookPage() {
    
    const {id} = useParams()
    const [bookDetails, setBookDetails] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [bookReviews, setBookReviews] = useState([])
    const [reviewNumber, setReviewNumber] = useState(0)
    const [ratingAverage, setRatingAverage] = useState(0)
    const [ratingTotal, setRatingTotal] = useState([])

    function getBookDetails() {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then(response => response.json())
            .then(details => {
                setBookDetails(details.data)
                setBookGenre(details.data.genre.name)
                setBookReviews(details.data.reviews)
                setReviewNumber(details.data.reviews.length) 


                setRatingTotal({ratingTotal.map(function (review)
                    return
                    (
                        ratingTotal = ratingTotal + details.data.reviews.rating
                    ))})
               
                })}
                    // ratingAverage = ratingTotal/reviewNumber  
  //get value of "rating" from each object in the array, divide this by reviewNumber

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
               review_number={reviewNumber}
               blurb={bookDetails.blurb} />
            
            <div className="
                pt-2 pb-5 px-10 text-center mx-auto 
                md:max-w-[1000px] md:text-left md:px-10 md:py-2 md:items-start ">
                    <H5 text="Reviews"/>

                    {bookReviews.map(function (reviews) {
                        return (
                    <BookReview
                    key={reviews.id}
                    name={reviews.name}
                    rating={reviews.rating}
                    review={reviews.review} />
                
                )})}
            </div>
        </div>
    )
}