import React, { useState, useEffect } from 'react';
import { BookInfos } from "../../components"
import axios from 'axios';
import { apiHost } from "../../constants"


const BookDetails = (props) => {

    const [book, setBook] = useState("")

    useEffect(() => {
        const id = props.routerProps.match.params.id
        if (id) {
            axios.get(`${apiHost}/books/${id}`).then((result) => {
                console.log("result: ", result)
                setBook(result.data)
            })
        }
    }, [])


    console.log(props)

    const selectedBooks = props.routerProps.match.params.id
    console.log("s", selectedBooks)
    if (!book) {
        return <h2>{selectedBooks} books not found!</h2>
    }
    return (
        <div>
            <BookInfos id={selectedBooks} book={book} />
        </div>
    );
}

export default BookDetails
