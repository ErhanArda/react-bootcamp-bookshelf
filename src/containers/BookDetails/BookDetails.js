import React, { Component } from 'react';
import { BookInfos } from "../../components"
import axios from 'axios';
import { apiHost } from "../../constants"
class BookDetails extends Component {
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
                    book: result.data
                })
            })
        }
    }

    render() {
        console.log(this.props)
        const selectedBooks = this.props.routerProps.match.params.id
        console.log("s",selectedBooks)
        if(!this.state.book){
        return <h2>{selectedBooks} books not found!</h2>
        }
        return (
            <div>
                {/* {this.state.book.title} */}
                <BookInfos id={selectedBooks} book={this.state.book} />
            </div>
        );
    }
}
export default BookDetails