import React, { Component } from 'react'
import { connect } from "react-redux"
import { Books, FilterSortBar } from "../../components"
import { getBooks } from "../../state/ducks/books/actions"
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { itemsPerPage } from "../../constants"

export class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            activePage: 1
        }
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
            sortedBooks = [...filteredBooks].sort((book1, book2) => {
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
            books = <Books items={sortedBooks.slice(itemsPerPage * (this.state.activePage - 1), itemsPerPage * this.state.activePage)} />

        }
        console.log("pages: ", Math.ceil(sortedBooks.length / itemsPerPage))
        const PaginationArray = new Array(Math.ceil(sortedBooks.length / itemsPerPage))
        PaginationArray.fill(null)
        return (
            <div>
                <FilterSortBar />
                <Container>
                    <div className="books-holder">
                        {books}
                    </div>

                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled={this.state.activePage === 1}>
                            <PaginationLink first href="#" onClick={(e) => {
                                e.preventDefault()
                                this.setState({
                                    activePage: 1
                                })
                            }} />
                        </PaginationItem>
                        <PaginationItem disabled={this.state.activePage === 1}>
                            <PaginationLink previous href="#" onClick={(e) => {
                                e.preventDefault()
                                this.setState({
                                    activePage: this.state.activePage - 1
                                })
                            }} />
                        </PaginationItem>
                        {
                            PaginationArray.map((page, index) => {
                                const pageNum = index + 1
                                return <PaginationItem active={pageNum === this.state.activePage}>
                                    <PaginationLink href="#" onClick={(e) => {
                                        e.preventDefault()
                                        this.setState({ activePage: pageNum })
                                    }} >
                                        {pageNum}
                                    </PaginationLink>
                                </PaginationItem>
                            })
                        }
                        <PaginationItem disabled={this.state.activePage === PaginationArray.length}>
                            <PaginationLink next href="#" onClick={(e) => {
                                e.preventDefault()
                                this.setState({
                                    activePage: this.state.activePage + 1
                                })
                            }} />
                        </PaginationItem>
                        <PaginationItem disabled={this.state.activePage === PaginationArray.length}>
                            <PaginationLink last href="#" onClick={() => {
                                this.setState({
                                    activePage: PaginationArray.length
                                })
                            }} />
                        </PaginationItem>
                    </Pagination>
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


