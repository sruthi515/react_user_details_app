import Axios from 'axios';

export const SET_USER_DETAILS = 'SET_USER_DETAILS'
export const DELETE_USER = 'DELETE_USER'
export const SET_ORDER = 'SET_ORDER'
export const SET_ORDER_BY = 'SET_ORDER_BY'
export const SET_PAGE = 'SET_PAGE'
export const SET_ROWS_PER_PAGE = 'SET_ROWS_PER_PAGE'
export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS'


export const setUserDetails = (userDetails) => {
    return {
        type: SET_USER_DETAILS,
        userDetails
    }
}

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        userId
    }
}

export const setOrder = (order) => {
    return {
        type: SET_ORDER,
        order
    }
}

export const setOrderBy = (orderBy) => {
    return {
        type: SET_ORDER_BY,
        orderBy
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        page
    }
}

export const setRowsPerPage = (rowsPerPage) => {
    return {
        type: SET_ROWS_PER_PAGE,
        rowsPerPage
    }
}

export const fetchUserDetails = (userId) => {

    return {
        type: FETCH_USER_DETAILS,
        userId
    }
}

export const fetchUsersDetails = () => {

    return function(dispatch) {
        return Axios.get('https://jsonplaceholder.typicode.com/users')
        .then( userDetails =>{
            dispatch(setUserDetails(userDetails.data))
        })
    }
}