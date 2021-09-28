import './App.css';
import {Child} from "./lib";
import {Provider} from "react-redux";
import store from "./lib/redux/store";

function App() {
    return (
        <Provider store={store}>
            <Child/>
        </Provider>
    );
}

export default App;
