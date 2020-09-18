//cada reducer tiene su propio state
const initialstate = {
    productos: [],
    error: false,
    loading: false
}

export default function (state = initialstate, action){
    switch(action.type){
        default:
            return state;
    }
}