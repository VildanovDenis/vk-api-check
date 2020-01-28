import React from 'react';
import logo from './logo.svg';
import './App.css';

const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
    return (
        <div className="App">
            {
                someArr.map(item => <div key={item}>{item}</div>)
            }
        </div>
    );
}

export default App;
