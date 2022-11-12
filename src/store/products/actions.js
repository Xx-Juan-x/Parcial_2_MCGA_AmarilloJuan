import { SAVE_DATA_FULLFILLED, SAVE_DATA_LOADING, SAVE_DATA_REJECTED, ADD_DATA_FULLFILLED, ADD_DATA_LOADING, DELETE_DATA, ADD_DATA_REJECTED } from './types'


//Guardo la lista de productos

export const saveData = (data) => {
    return {
        type: SAVE_DATA_FULLFILLED,
        payload: data
    };
};

export const saveDataLoading = (isLoading) => {
    return{
        type: SAVE_DATA_LOADING,
        payload: isLoading
    };
};

export const saveDataError = () => {
    return {
      type: SAVE_DATA_REJECTED,
    };
};

//Agrego productos

export const addProduct = (data) => {
    return{
        type: ADD_DATA_FULLFILLED,
        payload: data
    };
};

export const addProductLoading = (isLoading) =>{
    return{
        type: ADD_DATA_LOADING,
        payload: isLoading
    };
};

export const addProductError = () =>{
    return{
        type: ADD_DATA_REJECTED,
    };
};

export const deleteData = (id) => {
    return {
        type: DELETE_DATA,
        payload: id
    }
}