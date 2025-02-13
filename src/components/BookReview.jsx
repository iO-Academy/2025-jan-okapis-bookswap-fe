
import H5 from "./atoms/H5"
import P from "./atoms/P"

export default function BookReview ({name, rating, review}) {
        return (
        <div>
        <H5 text="Reviews"/>
        <P className="font-bold" text={name}/>
        <P text={`${rating}/5 stars`}/>
        <P text= {review}/>
</div>
        


        


    )



}