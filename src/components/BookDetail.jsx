import H2 from "./atoms/H2";
import Highlighted from "./atoms/Highlighted";
import P from "./atoms/P";
import Rating from "./Rating";

export default function BookDetail ({image, title, author, year, page_count, genre, review_number, blurb, rating}) {
    return (
        <div className="flex flex-col 
        items-center text-center mx-auto md:max-w-[1000px]
        gap-2 pt-2 p-5 px-10 
        md:flex-row md:text-left md:p-10 md:items-start">
            <div className="md:max-w-[60%]">
                <img className="md:w-1000"
                src={image} alt={title} />
            </div>
            <div className="flex flex-col gap-[10px]">
                <H2 text={title} />
                <Highlighted text={author} />
                <Highlighted text={year} />
                <Highlighted text={`${page_count} pages`}/>
                <Highlighted text={genre} />
                <Rating rating={rating} reviewNumber={review_number} />
                <div className="pt-5">
                    <P text ={blurb} />
                </div>
            </div>
        </div>
    )
}