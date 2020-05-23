import React from 'react'
import Book from "./Book"
import { Row, Col } from 'reactstrap'


const Books = (props) => {
    return (
        <Row>
        {
            props.items.map((item) => {
                return <Col xs={props.view ==="cards"? 6 : 12} md={props.view ==="cards"?4:12} lg={props.view ==="cards"?3:12}>
                    <Book id={item.id} {...item}/>
                </Col>
            })
        }
    </Row>

    )
}

export default Books
