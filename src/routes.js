import { HomePage } from "./containers"

const routes = [
    {
        title: "Home Page",
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        title:"Add Book",
        path:"add-book",
        exact: false,
        component: AddBook
    }
]
export default routes