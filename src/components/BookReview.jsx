import P from "./atoms/P"

export default function BookReview ({name, rating, review}) {
    return (
        <div>
            <P className="font-bold" text={name}/>
            <P text={`${rating}/5 stars`}/>
            <P text= {review}/>
        </div>
    )
}