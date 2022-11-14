import { SAVE_DATA_FULLFILLED, SAVE_DATA_LOADING, SAVE_DATA_REJECTED, ADD_DATA_FULLFILLED, ADD_DATA_LOADING, ADD_DATA_REJECTED, EDIT_DATA_FULLFILLED, EDIT_DATA_LOADING, EDIT_DATA_REJECTED, DELETE_DATA } from './types'

//Inicializo los estados (array vacío - cargando - error)
const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false
}

//Guardamos, obtenemos, agregamos, modificamos y eliminamos datos del producto
const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SAVE_DATA_FULLFILLED:
            return {
                ...state,
                data: action.payload,
                isError: false
            };

        case SAVE_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case SAVE_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            };

        case ADD_DATA_FULLFILLED:
            return{
                ...state,
                data: action.payload,
                isError: false
            };

        case ADD_DATA_LOADING:
            return{
                ...state,
                isLoading: action.payload
            };

        case ADD_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            };

        case EDIT_DATA_FULLFILLED:
            return{
                ...state,
                data: action.payload,
                isError: false
            };

        case EDIT_DATA_LOADING:
            return{
                ...state,
                isLoading: action.payload
            };

        case EDIT_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            };

        case DELETE_DATA:
            return {
                ...state,
                data: state.data.filter(x => x.id !== action.payload)
            };

        default:
            return state;
    }
}

export default productsReducer;