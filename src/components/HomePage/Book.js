import React from 'react'
import {
    CardImg, CardText, CardBody, CardLink
} from 'reactstrap';
import { StyledBook } from "./BookStyles"
import { Link } from 'react-router-dom';

const Book = (props) => {
    //console.log(props)
    const { imageUrl, title, rating, id } = props
    return (
        <StyledBook>
            <CardImg top width="100%" src={imageUrl} alt={title} />
            <CardBody>
                <CardText>
                    <strong>{`${rating} / 5`}</strong>
                </CardText>
                <CardText>{title}</CardText>
                {/* <CardText>{description}</CardText> */}
                <CardLink>
                    Details
                    </CardLink>
                <CardLink>
                    <Link to={`/edit-book/${id}`}>Edit book</Link>
                    </CardLink>
            </CardBody>
        </StyledBook>

    )
}

export default Book
