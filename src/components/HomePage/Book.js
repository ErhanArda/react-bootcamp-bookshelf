import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink
} from 'reactstrap';
import {StyledBook} from "./BookStyles"

const Book = (props) => {
    console.log(props)
    const { imageUrl, title, rating } = props
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
                        Edit Book
                    </CardLink>
                </CardBody>
        </StyledBook>

    )
}

export default Book
