import React, {useState} from 'react';
import {foo} from "../services/fooService";
import {connect} from "react-redux";

const Component2 = ({array}) => {

    const [s] = useState(foo());

    return <div>
        <p>component2</p>
        <p>array length: {array?.length}</p>
        <p>{s}</p>
    </div>
}

const mapStateToPros = (state) => ({
    array: state.main.array
})

export default connect(mapStateToPros)(Component2);
