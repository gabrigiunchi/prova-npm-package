import React from 'react';
import Component2 from "./Component2";
import Logo from '../logo.svg';
import {Provider} from "react-redux";
import store from "../redux/store";
import {useTranslation} from 'react-i18next';
import './Child.scss';

export const Child = () => {
    const {t} = useTranslation();
    
    console.log('this is a console.log')

    return <Provider store={store}>
        <img alt="logo" src={Logo} />
        <p className="title">child, env variable {process.env.REACT_APP_FOO}</p>
        <p>this is the common variable: {process.env.REACT_APP_FOO}</p>
        <p>{t('key1')}</p>
        <Component2 />
    </Provider>
}
