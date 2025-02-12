import H3 from "./atoms/H3";
import P from "./atoms/P";


export default function ClaimForm ({error}) {
    return (
        <form  className="border-1 p-3 flex flex-col text-left max-w-full">
            <H3 text={"Want to claim this book?"}/>
            <label for="name">Name</label>
            <input type="text" id="name" className="border-1"/>
            <label for="email">Email</label>
            <input type="email" id="email" className="border-1 mb-2"/>
            <input type="submit" value="Claim" className="border-1"/>
            <P text={error}/>
        </form>       
    )
}