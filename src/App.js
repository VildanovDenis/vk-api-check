import React from 'react';
import {useSpring} from 'react-spring'

import { SomeArrayItem } from './containers/someArrayItem';

import './App.css';

const someArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];

function App() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    const onClick = () => {
        if(window.VK) {
            window.VK.Auth.login(res => console.log(res))
        }
    }
    return (
        <div className='App'>
            <button type='button' onClick={onClick}>123</button>
            {
                someArr.map(item => <SomeArrayItem item={item} key={item}/>)
            }
        </div>
    );
}

export default App;
