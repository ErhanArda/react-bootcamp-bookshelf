import React, { Component } from 'react'
import { Container } from "reactstrap"

class MainLayout extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

    }

    //changes tab title
    componentDidMount() {
        const title = this.props.title;
        document.title = title
    }

    render() {
        console.log(this.props)

        const Children = this.props.children
        return (
            <div>
                <Container>
                    <Children />
                </Container>
            </div>
        )
    }
}

export default MainLayout