import React from 'react';
import {Component2} from "./Component2";
import Logo from '../logo.svg';

export const Child = () => {
    return <div>
        <img width="200px" src={Logo}/>
        <p>child</p>
        <Component2/>
    </div>
}
