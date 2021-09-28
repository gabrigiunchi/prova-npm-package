import React from 'react';
import Component2 from "./Component2";
import Logo from '../logo.svg';
import {Provider} from "react-redux";
import store from "../redux/store";

export const Child = () => {
    return <Provider store={store}>
        <img alt="logo" width="200px" src={Logo}/>
        <p>child</p>
        <Component2/>
    </Provider>
}
