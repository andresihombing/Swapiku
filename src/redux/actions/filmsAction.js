export const LIST_FILM = 'LIST_FILM'
export const LIST_PEOPLE = 'LIST_PEOPLE'
export const PEOPLE = 'PEOPLE'
export const INDEX = 'INDEX'

export function changeFilm(value){
    return{
        type: LIST_FILM,
        payload: value
    }
}

export function changePeople(value){
    return{
        type: LIST_PEOPLE,
        payload: value
    }
}

export function changePeopleIndex(value){
    return{
        type: INDEX,
        payload: value
    }
}

export function changePeopleById(value){
    return{
        type: PEOPLE,
        payload: value
    }
}