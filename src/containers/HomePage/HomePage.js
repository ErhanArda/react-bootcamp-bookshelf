import React, { useState,useEffect} from 'react'
import { connect } from "react-redux"
import { Books, FilterSortBar } from "../../components"
import { getBooks } from "../../state/ducks/books/actions"
import { Container, Pagination, PaginationItem, PaginationLink, ButtonGroup, Button } from 'reactstrap'
import { itemsPerPage } from "../../constants"


const HomePage = (props) => {

    const [activePage, setActivePage] = useState(1)
    const [view, setView] = useState("cards")
    useEffect(() => {
        props.getBooks()
    }, [])



    if (props.loading) {
        return <h1>Books are loading...</h1>
    }
    //console.log("filter",this.props.filter)
    const allBooks = props.books;
    let filteredBooks = []
    // filter for category
    if (props.filter) {
        filteredBooks = allBooks.filter((book) => {
            return book.category === props.filter
        })
    } else {
        filteredBooks = allBooks
    }

    //filter for searchTerm
    if (props.searchTerm) {
        filteredBooks = filteredBooks.filter((book) => {
            return book.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1 || book.author.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1

        })
    }

    //Sorting
    let sortedBooks = [];
    if (props.sortTerm) {
        sortedBooks = [...filteredBooks].sort((book1, book2) => {
            return parseInt(book2[props.sortTerm]) - parseInt(book1[props.sortTerm])
        })
    } else {
        sortedBooks = filteredBooks
    }


    let books = "";
    if (sortedBooks.length < 1) {
        books = <h2>NO BOOK HERE</h2>
    }
    else {
        books = <Books view={view} items={sortedBooks.slice(itemsPerPage * (activePage - 1), itemsPerPage * activePage)} />

    }
    console.log("pages: ", Math.ceil(sortedBooks.length / itemsPerPage))
    const PaginationArray = new Array(Math.ceil(sortedBooks.length / itemsPerPage))
    PaginationArray.fill(null)
    return (
        <div>
            <FilterSortBar />
            <Container>
                <div>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => {
                            setView("cards")
                        }} >Cards View</Button>
                        <Button color="primary" onClick={() => {
                            setView("list")
                        }} >List View</Button>
                    </ButtonGroup>
                </div>

                <div className="books-holder">
                    {books}
                </div>

                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={activePage === 1}>
                        <PaginationLink first href="#" onClick={(e) => {
                            e.preventDefault()
                            setActivePage(1)
                        }} />
                    </PaginationItem>
                    <PaginationItem disabled={activePage === 1}>
                        <PaginationLink previous href="#" onClick={(e) => {
                            e.preventDefault()
                            setActivePage(activePage - 1)
                        }} />
                    </PaginationItem>
                    {
                        PaginationArray.map((page, index) => {
                            const pageNum = index + 1
                            return <PaginationItem active={pageNum === activePage}>
                                <PaginationLink href="#" onClick={(e) => {
                                    e.preventDefault()
                                    setActivePage(pageNum)
                                }} >
                                    {pageNum}
                                </PaginationLink>
                            </PaginationItem>
                        })
                    }
                    <PaginationItem disabled={activePage === PaginationArray.length}>
                        <PaginationLink next href="#" onClick={(e) => {
                            e.preventDefault()
                            setActivePage(activePage - 1)
                        }} />
                    </PaginationItem>
                    <PaginationItem disabled={activePage === PaginationArray.length}>
                        <PaginationLink last href="#" onClick={() => {
                            
                            setActivePage(PaginationArray.length)
                        }} />
                    </PaginationItem>
                </Pagination>
            </Container>
        </div>
    )
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


