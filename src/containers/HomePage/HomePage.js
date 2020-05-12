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
        return (
            <div>
                <FilterSortBar />
                <Container>
                    <Books items={this.props.books} />
                </Container>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        books: state.books.data,
        loading: state.books.loading

    }
}
const mapDispatchToProps = {
    getBooks
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


