import React from 'react';

import { LoginForm } from './LoginForm';

import { VkService } from '../../services/Vk';
import { Link } from 'react-router-dom';

export const Login = () => {
    const session = VkService.getSession();

    if (session === null) {
        return <LoginForm/>
    }

    return <div>Вы уже авторизованы, вернитесь на <Link to='/'>главную</Link></div>
}