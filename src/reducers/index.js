
import {SET_USER_DETAILS, DELETE_USER, SET_ORDER,SET_ORDER_BY,SET_SELECTED,SET_PAGE,SET_ROWS_PER_PAGE, FETCH_USER_DETAILS} from '../actions';
import { combineReducers } from 'redux';

export const userDetailsReducer = (state = [], action) => {
    switch(action.type){

        case SET_USER_DETAILS:
            return [...state, ...action.userDetails]
        
        case FETCH_USER_DETAILS:
            let userDetails = state.find(userObj => userObj.id == action.userId)
            return userDetails
            
        case DELETE_USER:
            let index = state.findIndex(userObj => userObj.id === action.userId)
            return [    
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default: 
            return state
    }
}

const filters_initial_state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    page: 0,
    rowsPerPage: 5
}

export const filtersReducer = (state = filters_initial_state, action) => {
    switch(action.type){

        case SET_ORDER:
            return {...state, order: action.order }
        case SET_ORDER_BY:
            return {...state, orderBy: action.orderBy }
        case SET_SELECTED:
            return {...state, selected: action.selected }
        case SET_PAGE:
            return { ...state, page: action.page }
        case SET_ROWS_PER_PAGE:
            return { ...state, rowsPerPage: action.rowsPerPage }                                                    
        default: 
            return state
    }
}

const userDetailsApp = combineReducers({userDetails: userDetailsReducer, filters: filtersReducer})
export default userDetailsApp
