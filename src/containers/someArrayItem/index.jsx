import React from 'react';
import {useSpring, animated, interpolate} from 'react-spring'

export const SomeArrayItem = ({item}) => {
    const {o, xyz, color} = useSpring({
        from: {
            o: 0,
            xyz: [0, 0, 0],
            color: 'red'
        },
        o: 1,
        xyz: [10, 20, 5],
        color: 'green'
    });
    return (
        <animated.div
            style={{
                // color,
                background: o.interpolate(o => `rgba(210, 57, 77, ${o})`),
                transform: xyz.interpolate((x, y, z) => `transform3d(${x}px, ${y}px, ${z}px)`),
                // border: interpolate([o, color], (o, color) => `${o * 10}px solid ${color}`),
            }}
        >
            {item}
        </animated.div>
    )
}