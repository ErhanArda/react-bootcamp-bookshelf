import React,{useState,useEffect} from 'react';
import { AddBookForm } from "../../components"
import { Row, Col, Container } from 'reactstrap'
import axios from 'axios';
import { apiHost } from "../../constants"


const AddBook = (props) => {
    const [book,setBook] = useState("")
    useEffect(()=>{
        const id = props.routerProps.match.params.id
        if (id) {
            axios.get(`${apiHost}/books/${id}`).then((result) => {
                console.log("result: ", result)
                setBook(result.data)
            })
        }
    },[])

        const isEdit = props.componentProps.isEdit
        const id = props.routerProps.match.params.id
        console.log(id)
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        {
                            isEdit ? <h3>Edit Book</h3> : <h3>Add a new book</h3>
                        }
                    </Col>
                    <Col>
                        <AddBookForm isEdit={isEdit}  id={id} book={book} />
                    </Col>
                </Row>
            </Container>
        )
}

export default AddBook
