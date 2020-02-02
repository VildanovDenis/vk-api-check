import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/'>Мои друзья</NavLink>
            <button type='button'>Выйти</button>
        </header>
    )
}