import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { VkService } from '../../services/Vk';

export const LoginForm = () => {
    const [error, setError] = useState('');
    const routerHistory = useHistory();
    const onClick = async () => {
        try {
            // Прокинуть авторизацию в стор менеджер если понадобится
            const auth = await VkService.initAuth();
            console.log(`Dispatch auth data if need: `, auth);
            routerHistory.push('/')
        } catch(err) {
            console.error(err);
            setError(err.message);
        }
    }
    
    return (
        <div>
            <button type='button' onClick={onClick} title='login via vk'>
                Войти
            </button>
            {
                error &&
                <p>{error}</p>
            }
        </div>
    )
}