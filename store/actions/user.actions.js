import { TOGGLE_FAV_PRODUCT, SET_USER_LOGGED } from "../../utils/actionConstants";


export const toggleFavProduct = ({ id }) => ({
    type: TOGGLE_FAV_PRODUCT,
    id,
});

export const setUserLogged = ({ user }) => ({
    type: SET_USER_LOGGED,
    user,
});
