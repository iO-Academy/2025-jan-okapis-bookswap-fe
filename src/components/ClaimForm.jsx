import { useParams } from "react-router-dom";
import H3 from "./atoms/H3";
import P from "./atoms/P";
import { useEffect, useState } from "react";


export default function ClaimForm () {

    const {id} = useParams()
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const data = {
        "name":name,
        "email":email,
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
            setEmailError(claimData?.errors?.email)
            setNameError(claimData?.errors?.name)
        })
    }

    function handleClick(e) {
        e.preventDefault();
        sendClaimForm()
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    return (
        <form onSubmit={handleClick} className="border-1 p-3 flex flex-col text-left max-w-full">
            <H3 text={"Want to claim this book?"}/>
            <label htmlFor="name">Name</label>
            <input onChange={handleNameChange} value={name} type="text" id="name" className="border-1"/>
            {nameError && <P text={nameError}/>}
            <label htmlFor="email">Email</label>
            <input onChange={handleEmailChange} value={email} type="email" id="email" className="border-1 mb-2"/>
            {emailError && <P text={emailError}/>}
            <input type="submit" value="Claim" className="border-1"/>
        </form>       
    )
}
