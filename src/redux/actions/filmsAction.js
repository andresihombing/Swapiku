export const LIST_FILM = 'LIST_FILM'
export const LIST_PEOPLE = 'LIST_PEOPLE'

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