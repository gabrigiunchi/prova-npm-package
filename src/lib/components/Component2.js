import React, {useState} from 'react';
import {foo} from "../services/fooService";

export const Component2 = () => {

    const [s] = useState(foo());

    return <div>
        <p>component2</p>
        <p>{s}</p>
    </div>
}
