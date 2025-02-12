import { useEffect, useState } from "react";
import H2 from "./atoms/H2";
import Highlighted from "./atoms/Highlighted";
import P from "./atoms/P";
import StatusCheck from "./StatusCheck";
import { useParams } from "react-router-dom";

export default function BookDetail ({person, claimedStatus}) {

    const {id} = useParams()
    const [bookDetails, setBookDetails] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [claimedName, setClaimedName] = useState(null)

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

    var claimedStatus = true
    if (claimedName === null){
        claimedStatus = false
    }

    return (
        <div className="flex flex-col 
        items-center text-center mx-auto md:max-w-[1000px]
        gap-2 pt-2 p-5 px-10 
        md:flex-row md:text-left md:p-10 md:items-start">
            <div className="md:max-w-[60%]">
                <img className="md:w-1000"
                src={bookDetails.image} alt={bookDetails.title} />
            </div>
            <div className="flex flex-col gap-[10px]">
                <H2 text={bookDetails.title} />
                <Highlighted text={bookDetails.author} />
                <Highlighted text={bookDetails.year} />
                <Highlighted text={`${bookDetails.page_count} pages`}/>
                <Highlighted text={bookGenre} />
                <StatusCheck person={claimedName} claimed={claimedStatus}/>
                <div className="pt-5">
                    <P text ={bookDetails.blurb} />
                </div>
            </div>
        </div>
    )
}
