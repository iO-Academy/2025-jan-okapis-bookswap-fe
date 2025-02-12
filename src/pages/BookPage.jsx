import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import { useEffect, useState } from "react";

export default function BookPage() {
    return(
        <div>
            <BookDetail />
        </div>
    )
}