import H2 from "../components/atoms/H2"
import Highlighted from "./atoms/Highlighted"

export default function SingleBook({title, author, image, genre}){

    return (
        <div className="m-2 p-4 border-2">
            <img src={image} alt="" />
            <H2 text={title} />
            <Highlighted text={author} />
            <Highlighted text={genre} />
        </div>
    )
}

