import React, { Component } from 'react'

class MainLayout extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    
    }
    
    //changes tab title
    componentDidMount(){
        const title = this.props.title;
        document.title = title
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.children()}
            </div>
        )
    }
}

export default MainLayout