import React from 'react'
import { Nav } from 'reactstrap';
import {StyledNavbarText} from "./FilterSortBarStyles"
import { categories } from '../../constants';


const FilterSortBar = () => {
    return (
        <div>
            <Nav className="bg-white">
                <StyledNavbarText> <strong>Categories:</strong> </StyledNavbarText>
                <StyledNavbarText> All </StyledNavbarText>
                {
                    categories.map((category,index) => {
                        return <StyledNavbarText active={index===2}>
                            {category}
                        </StyledNavbarText>
                    })
                }
            </Nav>
            <hr />

        </div>

    )
}

export default FilterSortBar
