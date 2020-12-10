import {LIST_FILM, LIST_PEOPLE} from '../actions/filmsAction'

const initialState = {
    listFilm: [],
    listPeople: []
}

const filmReducer = (state = initialState, action) => {
    switch(action.type){
        case LIST_FILM:
            return {
                ...state,
                listFilm: action.payload
            }
        case LIST_PEOPLE:
            return {
                ...state,
                listPeople: action.payload
            }
        default:
            return state
    }
}

export default filmReducer;