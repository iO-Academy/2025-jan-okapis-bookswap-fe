import P from "./atoms/P";

export default function Rating({reviewNumber, rating}){
    return (
        <div className="flex flex-row       
        items-center text-center mx-auto gap-1
        md:text-left md:items-start">
            <P text={`${reviewNumber} reviews`}/>
            <P text={`- ${rating}/5 stars`}/>
        </div>
    )
}