import React, {Component} from 'react';
import './App.css';
import './cards.css';

import Cards from "./Component/Cards/Cards";

class App extends Component{
    render() {
        return(
            <div className='App'>
                <Cards/>
            </div>
        )
    }
}

export default App;
