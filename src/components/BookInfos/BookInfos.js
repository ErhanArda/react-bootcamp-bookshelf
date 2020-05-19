import React from 'react'

const BookInfos = (props) => {
    console.log(props)
    return (
        <div>
            {props.book.category}
            {props.book.title}
            {props.book.author}
            {props.book.description}

            {props.book.goodReads}

            {props.book.rating}

            {props.book.review}



        </div>
    )
}

export default BookInfos
