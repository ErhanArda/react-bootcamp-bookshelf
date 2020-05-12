import React from 'react'
import { AddBookForm } from "../../components"
import { Row, Col } from 'reactstrap'

const AddBook = () => {
    return (
        <Row>
            <Col xs={12}>
                <h3>Add a new book</h3>
            </Col>
            <Col>
                <AddBookForm />
            </Col>
        </Row>
        // npm install yup --save
    )
}

export default AddBook
