import React from 'react';
import { auth } from '../../api/auth';

export const Login = () => {
    const onClick = async () => {
        try {
            const a = await auth();
        } catch(err) {
            console.error(err);
        }
    }
    
    return (
        <div>
            <button type='button' onClick={onClick} title='login via vk'>
                login via vk
            </button>
        </div>
    )
}