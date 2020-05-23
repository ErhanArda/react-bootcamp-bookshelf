import React, { useState } from 'react'
import Book from "./Book"
import { Row, Col } from 'reactstrap'


const Books = (props) => {
    const [randomId, setRandomId] = useState(1)
    return (
        <Row>
            {
                props.items.map((item) => {
                    return <Col xs={props.view === "cards" ? 6 : 12}
                        md={props.view === "cards" ? 4 : 12}
                        lg={props.view === "cards" ? 3 : 12}
                        onClick={()=>{
                            setRandomId(Math.random())
                        }}
                    >
                        <Book id={item.id} {...item} randomId={randomId} />
                    </Col>
                })
            }
        </Row>

    )
}

export default Books
