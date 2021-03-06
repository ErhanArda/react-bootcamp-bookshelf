import * as Actions from "./actionTypes"
import axios from "axios"
import { apiHost } from "../../../constants"

export const addBook = (values, history) => {
    return (dispacth) => {
        axios.post(`${apiHost}/books`, values).then((result) => {
            console.log(result.data)
            dispacth({
                type: Actions.ADD_BOOK,
                payload: result.data
            })
            history.push("/react-bootcamp-bookshelf")
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const editBook = (values, history, id) => {
    return dispatch => {
        axios.put(`${apiHost}/books/${id}`, values).then((result) => {
            dispatch({ type: Actions.UPDATE_BOOKS, payload: result.data })
            history.push("/react-bootcamp-bookshelf");
        }).catch((err) => {
            console.log(err);
        });
    };
};



export const getBooks = () => {
    return dispatch => {
        dispatch({
            type: Actions.LOAD_BOOKS
        })
        axios.get(`${apiHost}/books`).then((result) => {
            dispatch({
                type: Actions.SET_BOOKS,
                payload: result.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const setFilter = (filter) => {
    return dispatch => {
        dispatch({
            type: Actions.SET_FILTER,
            payload: filter
        })
    }
}

export const searchBooks = (searchTerm) => {
    return dispatch => {
        dispatch({
            type: Actions.SEARCH_BOOKS,
            payload: searchTerm
        })
    }
}
export const sortBooks = (sortTerm) => {
    return dispatch => {
        dispatch({
            type: Actions.SORT_BOOKS,
            payload: sortTerm
        })
    }
}