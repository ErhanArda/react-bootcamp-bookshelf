import React, { useEffect, useState } from 'react'
import {
    CardImg, CardText, CardBody, CardLink,
    Button, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import { StyledBook } from "./BookStyles"
import { Link } from 'react-router-dom';

const Book = (props) => {
    //console.log(props)
    const { imageUrl, title, rating, id, review, goodReads, randomId } = props
    useEffect(() => {
        console.log(randomId)
    }, [randomId])


    useEffect(() => {
        return () => {
            console.log("Components are going")
        }
    }, [])

    console.log(goodReads)

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <StyledBook>
            <CardImg top width="100%" src={imageUrl} alt={title} />
            <CardBody>
                <CardText>
                    <strong>{`${rating} / 5`}</strong>
                </CardText>
                <CardText>{title}</CardText>
                <Button id={`popover${id}`} type="button">
                    Review
            </Button>
                <Popover
                    placement="bottom"
                    isOpen={popoverOpen}
                    target={`popover${id}`}
                    toggle={toggle}
                >
                    <PopoverBody>
                        {review ? review : "No review for this book"}
                    </PopoverBody>
                </Popover>
                <br />
                <CardLink>
                    <Link to={`/book-details/${id}`}>Details</Link>
                </CardLink>
                <CardLink>
                    <Link to={`/edit-book/${id}`}>Edit Book</Link>
                </CardLink>
                <br />

                <CardLink>
                    {
                        goodReads && <a href={`${goodReads}`} target="_blank" rel="noopener noreferrer" >Good Reads</a>
                        //<Link to={`${goodReads}`} target="_blank">Good Reads</Link>
                    }
                </CardLink>
            </CardBody>
        </StyledBook>

    )
}

export default Book
