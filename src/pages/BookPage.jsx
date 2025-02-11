import BookDetail from "../components/BookDetail";

export default function BookPage() {
    return (
        <div>  
            <BookDetail image="https://placehold.co/600x400" 
            title="Title" 
            author="Author Name"
            year="2000" 
            page_count="395" 
            genre="Thriller"
            blurb="This was the scariest book I have ever read!!!!!!
            This was a fun one that captured my attention right away and held it until the end!
            I’m not gonna say that I particularly liked the characters in here, but I do think they were well written and fleshed out!
            They frustrated me at times, but that added to the thrill.
            There are lots of reveals and little twists as the story unravels to keep this interesting throughout the whole story.
            I did have a suspicion about how this would all wrap up but that didn’t make me find it any less exciting.
            Not overly memorable, but definitely a fun thriller!" />
        </div>
    )
}