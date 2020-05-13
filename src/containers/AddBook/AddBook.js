import React from 'react'
import { AddBookForm } from "../../components"
import { Row, Col, Container } from 'reactstrap'

const AddBook = () => {
    return (
        <Container>

        <Row>
            <Col xs={12}>
                <h3>Add a new book</h3>
            </Col>
            <Col>
                <AddBookForm />
            </Col>
        </Row>
        </Container>
    )
}

export default AddBook