import React from 'react'

const Books = (props) => {
    return (
        <div>
            {
                props.items.map((item)=> {
                return <li>{item.title}</li>
                })
            }
        </div>
    )
}

export default Books
