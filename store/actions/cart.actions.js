import { ADD_PRODUCT, REMOVE_PRODUCT, SET_COUNT } from "../../utils/actionConstants";

export const addProduct = ({ thumb, name, price, count, color, size, id }) => ({
    type: ADD_PRODUCT,
    name,
    thumb,
    price,
    count,
    color,
    size,
    id,
});

export const removeProduct = ({ color, size, id }) => ({
    type: REMOVE_PRODUCT,
    color,
    size,
    id,
});

export const setCount = ({ color, size, id, count }) => ({
    type: SET_COUNT,
    color,
    size,
    count,
    id,
});
