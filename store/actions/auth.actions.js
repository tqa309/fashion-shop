import * as authApi from '../../api/auth';
import { LOGIN, LOGOUT, REGISTER, FORGOT_PASSWORD, RESET_PASSWORD, ACTIVATE_ACCOUNT, LOGIN_ERROR } from '../../utils/actionConstants';

export const login = (loginData) => async (dispatch) => {
    try {
        const { data } = await authApi.login(loginData);

        dispatch({ type: LOGIN, payload: data });
    } catch (error) {
        dispatch({ type: LOGIN_ERROR, payload: error });
        console.log(error);
    }
}

export const logout = (token) => async (dispatch) => {
    try {
        const { data } = await authApi.logout(token);

        dispatch({ type: LOGOUT, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const register = (registerData) => async (dispatch) => {
    try {
        const { data } = await authApi.register(registerData);

        dispatch({ type: REGISTER, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        const { data } = await authApi.forgotPassword(email);

        dispatch({ type: FORGOT_PASSWORD, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const resetPassword = (data) => async (dispatch) => {
    try {
        const { data } = await authApi.resetPassword(data);

        dispatch({ type: RESET_PASSWORD, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const activateAccount = (data) => async (dispatch) => {
    try {
        const { data } = await authApi.activateAccount(data);

        dispatch({ type: ACTIVATE_ACCOUNT, payload: data });
    } catch (error) {
        console.log(error);
    }
}