import React from 'react';

export const FriendCard = ({image, name, surname, id}) => (
    <a href={`https://vk.com/id${id}`} target='_blank' rel='noreferrer noopener' className='main__card'>
        <img
            className='avatar-circle'
            src={image}
            width='125'
            height='125'
            title={`Аватар пользователя ${name} ${surname}`}
            alt={`Аватар пользователя ${name} ${surname}`}/>
        <p className='username'>
            {`${name} ${surname}`}
        </p>
    </a>
)