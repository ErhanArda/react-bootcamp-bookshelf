import { HomePage,AddBook,BookDetails } from "./containers"

const routes = [
    {
        title: "Home Page",
        path: "/react-bootcamp-bookshelf",
        exact: true,
        componentProps: {
        },
        component: HomePage
    },
    {
        title: "Add Book",
        path: "/add-book",
        exact: false,
        componentProps: {
        },
        component: AddBook
    }, 
    {
        title: "Edit Book",
        path: "/edit-book/:id",
        exact: false,
        componentProps: {
            isEdit: true
        },
        component: AddBook
    },
    {
        title: "Book Details",
        path: "/book-details/:id",
        exact: false,
        componentProps: {
        },
        component: BookDetails
    }, 
]
export default routes