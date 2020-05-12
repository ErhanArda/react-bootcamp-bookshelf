import React from 'react'
import { Nav } from 'reactstrap'
import { connect } from "react-redux"
import { StyledNavbarText } from "./FilterSortBarStyles"
import { categories } from '../../constants';
import { setFilter } from '../../state/ducks/books/actions';


const FilterSortBar = (props) => {
    return (
        <div>
            <Nav className="bg-white">
                <StyledNavbarText> <strong>Categories:</strong> </StyledNavbarText>
                <StyledNavbarText active={!props.activeFilter} onClick={() => {
                    props.changeFilter("")
                }}> All </StyledNavbarText>
                {
                    categories.map((category) => {
                        return <StyledNavbarText active={props.activeFilter === category}
                            onClick={() => {
                                props.changeFilter(category)
                            }}
                        >
                            {category}
                        </StyledNavbarText>
                    })
                }
            </Nav>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        activeFilter: state.books.filter
    }
}

const mapDispatchToProps = {
    changeFilter: setFilter
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar)
