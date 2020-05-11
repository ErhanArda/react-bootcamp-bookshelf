import React from 'react'
import { Switch, Route } from "react-router-dom"
import routes from "../../routes"
import MainLayout from '../MainLayout'

const Main = () => {
    return (
        <div>
            <Switch>
                {
                    routes.map((route) => {
                        return <Route
                            path={route.path}
                            exact ={route.exact}
                            component={()=>{
                                const Comp = route.component
                            return <MainLayout title = {route.title}>{Comp}</MainLayout>
                            }} />

                    })
                }
            </Switch>
        </div>
    )
}

export default Main
