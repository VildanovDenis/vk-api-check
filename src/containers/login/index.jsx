import React, { useState, useEffect } from 'react';

export const Login = () => {
    const [isVkAvailable, setIsVkAvailable] = useState(null);

    useEffect(() => {
        if (window.VK) {
            setTimeout(() => setIsVkAvailable(true), 500);
        } else {
            setTimeout(() => setIsVkAvailable(false), 500)
        }
    }, []);

    const onClick = () => {
        window.VK.Auth.login(res => console.log(res));
    }

    if(isVkAvailable === null) {
        return <div>Checking is vk auth available</div>
    }

    if(isVkAvailable === false) {
        return <div>Oops, something goes wrong, try to reload page</div>
    }
    
    return (
        <div>
            <button type='button' onClick={onClick}>
                login via vk
            </button>
        </div>
    )
}