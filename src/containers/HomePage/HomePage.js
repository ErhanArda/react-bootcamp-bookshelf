import React, { Component } from 'react'
import { connect } from "react-redux"
import { Books, FilterSortBar } from "../../components"
import { getBooks } from "../../state/ducks/books/actions"
import { Container } from 'reactstrap'

export class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getBooks()
    }


    render() {
        if (this.props.loading) {
            return <h1>Books are loading...</h1>
        }
        //console.log("filter",this.props.filter)
        const allBooks = this.props.books;
        let filteredBooks = []
        // filter for category
        if (this.props.filter) {
            filteredBooks = allBooks.filter((book) => {
                return book.category === this.props.filter
            })
        } else {
            filteredBooks = allBooks
        }

        //filter for searchTerm
        if (this.props.searchTerm) {
            filteredBooks = filteredBooks.filter((book) => {
                return book.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1 || book.author.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1

            })
        }

        //Sorting
        let sortedBooks = [];
        if (this.props.sortTerm) {
            sortedBooks = [...filteredBooks].sort((book1,book2) => {
                return parseInt(book2[this.props.sortTerm]) - parseInt(book1[this.props.sortTerm])
            })
        } else {
            sortedBooks = filteredBooks
        }


        let books = "";
        if (sortedBooks.length < 1) {
            books = <h2>NO BOOK HERE</h2>
        }
        else {
            books = <Books items={sortedBooks} />
        }
        return (
            <div>
                <FilterSortBar />
                <Container>
                    <div className="books-holder">
                        {books}
                    </div>
                </Container>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        books: state.books.data,
        loading: state.books.loading,
        filter: state.books.filter,
        searchTerm: state.books.searchTerm,
        sortTerm: state.books.sortTerm

    }
}
const mapDispatchToProps = {
    getBooks
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


