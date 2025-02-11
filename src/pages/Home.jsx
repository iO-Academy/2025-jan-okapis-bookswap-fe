import { useEffect, useState } from "react";
import SingleBook from "../components/SingleBook";

export default function Home () {
 //setting the constants for the fetched info and creating state
    const [bookInfo, setBookInfo] = useState([])

    function getData(){
        let url = "https://book-swap-api.dev.io-academy.uk/api/books"

        fetch(url)
         .then(res => res.json())
         .then(fetchedInfo=> {
            setBookInfo(fetchedInfo.data)
            console.log(fetchedInfo.data)
         })
     }

    useEffect(getData, [])

    return (
      <section> 
        {/* <SingleBook title= author= image= genre= /> */}
      </section> 
    )
}