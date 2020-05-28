import React from 'react'

const BookInfos = (props) => {
    console.log(props)
    const { imageUrl, title, author, description, review, rating,goodReads } = props.book
    return (
        <div className="book-photo">

            <img
                src={imageUrl}
                alt={title}
                className="photo"
            />

            <div>
                <h1>{title}</h1>
                <h3>{rating}/5</h3>
                <p className="author">{author}</p>
                <p className="description">{description}</p>
                <p className="review">{review}</p>

                {  goodReads && <a href={`${goodReads}`} target="_blank" rel="noopener noreferrer" >Good Reads</a>}
            </div>
        </div>

    )
}

export default BookInfos
