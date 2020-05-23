import React, {useEffect} from 'react'

const MainLayout = (props) => {

    useEffect(() => {
        const title = props.title
        document.title = title
    }, [])

    const Children = props.children

    return (
        <div>
            <Children routerProps={props.routerProps} componentProps={props.componentProps} />
        </div>
    )
}

export default MainLayout

