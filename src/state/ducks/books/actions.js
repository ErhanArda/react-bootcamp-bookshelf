import * as Actions from "./actionTypes"

export const addBook = values => {
    return (dispact) => {
        dispact({
            type: Actions.ADD_BOOK,
            payload: values
        })
    }
}

