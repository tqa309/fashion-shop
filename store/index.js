import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";
import authReducer from "./reducers/auth";

const combinedReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
});

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
    if (isServer) {
        return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
    } else {
        const { persistStore, persistReducer } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "shoppingcart",
            whitelist: ["cart", "user", "auth"],
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer);

        const store = createStore(
            persistedReducer,
            bindMiddleware([thunkMiddleware])
        );

        store.__persistor = persistStore(store);

        return store;
    }
};

export const wrapper = createWrapper(makeStore, { debug: true });
