import React from 'react';
import { Link } from 'react-router-dom';

import { VkService } from '../../services/Vk';

import { ProtectedMain } from './ProtectedMain';

export const Main = () => {
    const session = VkService.getSession();
    if (session === null) {
        return <div>Пожалуйста <Link>войдите</Link>, чтобы продолжить</div>
    }
    
    return <ProtectedMain/>
}