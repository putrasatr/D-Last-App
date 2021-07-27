import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import {
    Home,
    Login
} from "../views/containers"
import Router from "../router/Router"

const Context = createContext({
    token: null,
    router: {},
    isLoginRouter: {}
});

export const useCounter = () => useContext(Context);

const ContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isLoginRouter, setLoginRouter] = useState([
        { name: "LoginScreen", component: Login },
        { name: "HomeScreen", component: Router }

    ]);

    useEffect(() => {
        AsyncStorage.getItem('Auth').then((value) => {
            if (value) {
                setLoginRouter([
                    { name: "HomeScreen", component: Router },
                    { name: "LoginScreen", component: Login }
                ]);
                setToken(value);
                return
            }
        });
    }, [AsyncStorage]);
    return (
        <Context.Provider value={{ token, isLoginRouter }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider