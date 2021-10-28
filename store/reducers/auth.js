import {
    LOGIN,
    LOGOUT,
    REGISTER,
    RESET_PASSWORD,
    FORGOT_PASSWORD,
    ACTIVATE_ACCOUNT,
} from "../../utils/actionConstants";

const authReducer = (auth = {}, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload, "payload");
            return action.payload;
        case LOGOUT:
            if (action.payload) return {};
            return auth;
        case REGISTER:
            return action.payload;
        case ACTIVATE_ACCOUNT:
            return action.payload;
        case FORGOT_PASSWORD:
            return action.payload;
        case RESET_PASSWORD:
            console.log(action.payload, "payload");
            return action.payload;
        default:
            return auth;
    }
};

export default authReducer;
