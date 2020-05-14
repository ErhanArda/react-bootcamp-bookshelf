import React from 'react';
import { AddBookForm } from "../../components"
import { Row, Col, Container } from 'reactstrap'
import axios from 'axios';
import { apiHost } from "../../constants"


class AddBook extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            book: ""
        }
    }

    componentDidMount() {
        const id = this.props.routerProps.match.params.id
        if (id) {
            axios.get(`${apiHost}/books/${id}`).then((result) => {
                console.log("result: ", result)
                this.setState({
                    book:result.data
                })
            })
        }
    }


    render() {
        console.log(this.props)
        const isEdit = this.props.componentProps.isEdit
        const id = this.props.routerProps.match.params.id
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
                        <AddBookForm isEdit={isEdit} book={this.state.book} />
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default AddBook;
