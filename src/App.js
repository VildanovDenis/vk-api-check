import React from 'react';
import {useSpring, animated} from 'react-spring'

import { SomeArrayItem } from './containers/someArrayItem';

import './App.css';

const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <div>
            {
                someArr.map(item => <SomeArrayItem item={item} key={item}/>)
            }
        </div>
    );
}

export default App;
