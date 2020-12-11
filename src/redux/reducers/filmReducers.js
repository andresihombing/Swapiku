import {LIST_FILM, LIST_PEOPLE, PEOPLE, INDEX} from '../actions/filmsAction'

const initialState = {
    listFilm: [],
    listPeople: [],
    people: [],
    index: ''
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
        case PEOPLE:
            return {
                ...state,
                people: action.payload
            }
        case INDEX:
            return {
                ...state,
                index: action.payload
            }
        default:
            return state
    }
}

export default filmReducer;