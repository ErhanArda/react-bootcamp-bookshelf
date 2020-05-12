import React, { Component } from 'react'
import { connect } from "react-redux"
import { Books } from "../../components"
import {getBooks} from "../../state/ducks/books/actions"

export class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getBooks()
    }


    render() {
        if(this.props.loading){
            return <h1>Books are loading...</h1>
        }
        return (
            <div>
                <h3>HomePage</h3>
                <Books items={this.props.books} />
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


