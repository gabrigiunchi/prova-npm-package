import React, {useState} from 'react';
import {foo} from "../services/fooService";
import {connect} from "react-redux";
import * as classes from './Component2.module.css';

const Component2 = ({array}) => {

    const [s] = useState(foo());

    return <div className={classes.container}>
        <p>component2</p>
        <p>array length: {array?.length}</p>
        <p>{s}</p>
    </div>
}

const mapStateToPros = (state) => ({
    array: state.main.array
})

export default connect(mapStateToPros)(Component2);
