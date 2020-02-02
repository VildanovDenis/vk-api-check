import React from 'react';

import styles from './index.module.css';

export const FriendCard = ({image, name, surname, id}) => (
    <a href={`https://vk.com/id${id}`} target='_blank' rel='noreferrer noopener' className={styles.card}>
        <img
            className={styles.avatar}
            src={image}
            width='100'
            height='100'
            title={`Аватар пользователя ${name} ${surname}`}
            alt={`Аватар пользователя ${name} ${surname}`}/>
        <p className={styles.userName}>
            {`${name} ${surname}`}
        </p>
    </a>
)