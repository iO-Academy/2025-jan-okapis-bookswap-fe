import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import { useEffect, useState } from "react";

export default function BookPage() {
    
    const {id} = useParams()
    const [bookDetails, setBookDetails] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [claimedName, setClaimedName] = useState("")

    function getBookDetails() {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then(response => response.json())
            .then(details => {
                setBookDetails(details.data)
                setBookGenre(details.data.genre.name)
                setClaimedName(details.data.claimed_by_name)
            })
    }

    useEffect(getBookDetails, [])

    const data = {
        "name":'',
        "email":'test @email. com',
    };

    const requestOptions = {
        method: "PUT",
        mode: 'cors',
        headers: { "Content-Type": "application/json",
                    "Accept": "application/json"
                },
        body: JSON.stringify(data)
    }

    function sendClaimForm() {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/claim/${id}`, requestOptions)
        .then(response => response.json())
        .then(claimData => {
            setEmailError(claimData.errors.email)
            setNameError(claimData.errors.name)
            console.log(claimData)
        })
    }

    useEffect(sendClaimForm, [])

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
        </div>
    )
}