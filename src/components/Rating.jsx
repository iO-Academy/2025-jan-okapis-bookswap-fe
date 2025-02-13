import P from "./atoms/P";

export default function Rating({reviewNumber, rating}){
    return (
        <div className="flex">
            <P text={`${reviewNumber} reviews`}/>
            <P text={`- ${rating}/5 stars`}/>
        </div>
    )
}