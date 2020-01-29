import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'

export const SomeArrayItem = ({item}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const {transform, opacity} = useSpring({
        opacity: isFlipped ? 1 : 0,
        transform: `perspective(600px), rotateX(${isFlipped ? 180 : 0}deg)`,
        config: {mass: 5, tension: 500, friction: 80}
    });

    return (
        <div
            className='card'
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <animated.img
                className='c'
                src='/logo512.png'
                width='250'
                height='250'
                style={{
                    opacity: opacity.interpolate(o => o - 1),
                    transform,
                }}/>
            <animated.span
                className='c ct'
                style={{
                    opacity,
                    transform: transform.interpolate(t => {console.log(t); return `${t}, rotate(180deg)`})
                }}
            >
                {item}
                {isFlipped ? 'da' : 'net'}
            </animated.span>
        </div>
    ) 
}