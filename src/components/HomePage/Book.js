import React , {useEffect} from 'react'
import {
    CardImg, CardText, CardBody, CardLink
} from 'reactstrap';
import { StyledBook } from "./BookStyles"
import { Link } from 'react-router-dom';

const Book = (props) => {
    //console.log(props)
    const { imageUrl, title, rating, id,review, goodReads,randomId  } = props
    useEffect(()=>{
        console.log(randomId)
    },[randomId])


    useEffect(()=>{
        return ()=>{
            console.log("Components are going")
        }
    },[])

    console.log(goodReads)
    return (
        <StyledBook>
            <CardImg top width="100%" src={imageUrl} alt={title} />
            <CardBody>
            <CardLink>
                    { 
                        goodReads && <a href={`${goodReads}`} target="_blank" rel="noopener noreferrer" >Good Reads</a>
                        // <Link to={`${goodReads}`} target="_blank">Good Reads</Link>
                    }
                </CardLink>
                {
                    review && <CardText>{review}</CardText>
                }
                <CardText>
                    <strong>{`${rating} / 5`}</strong>
                </CardText>
                <CardText>{title}</CardText>
                {/* <CardText>{description}</CardText> */}
                <CardLink>
                <Link to={`/book-details/${id}`}>Details</Link>
                    </CardLink>
                <CardLink>
                    <Link to={`/edit-book/${id}`}>Edit book</Link>
                    </CardLink>
            </CardBody>
        </StyledBook>

    )
}

export default Book
