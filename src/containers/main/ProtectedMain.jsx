import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBar } from '../../components/searchBar';
import { FriendCard } from '../../components/friendCard';

import { VkService } from '../../services/Vk';

import styles from './index.module.css';

export const ProtectedMain = () => {
    const [friends, setFriends] = useState([]);
    const [loginedUser, setLoginedUser] = useState(null);
    const [searchString, setSearchString] = useState('');
    const routerHistory = useHistory();
    
    useEffect(() => {
        const loginedUserId = VkService.getSession().mid;
        const method = 'users.get';
        const params = {
            user_ids: loginedUserId,
            fields: 'photo_200'
        };
        VkService.callApi(method, params)
            .then(res => setLoginedUser(res.response[0]))
            .catch(err => console.error(err));        
    }, []);

    useEffect(() => {
        if (loginedUser !== null) {
            const method = 'friends.get';
            const params = {fields: 'first_name, last_name, photo_100'};
            VkService.callApi(method, params)
                .then(res => setFriends(res.response.items))
                .catch(err => console.error(err))
        }
    }, [loginedUser]);

    const onLogoutClick = () => (
        VkService.killAuth()
            .then(() => routerHistory.push('/login'))
            .catch(err => console.error(err))
    );

    const renderFilteredFriends = () => {
        const renderArray = friends.filter(friend => {
            const {first_name, last_name} = friend;
            const friendName = `${first_name} ${last_name}`.toLowerCase();
            const re = new RegExp(searchString.toLowerCase(), 'g');
            return re.test(friendName);
        });

        return renderArray.map(friend => {
            const {id, first_name, last_name, photo_100} = friend;
            return (
                <FriendCard
                    key={id}
                    image={photo_100}
                    id={id}
                    name={first_name}
                    surname={last_name}/>
            )
        });
    };

    const renderFriends = () => {
        if (searchString === '') {
            return friends.map(friend => {
                const {id, first_name, last_name, photo_100} = friend;
                return (
                    <FriendCard
                        key={id}
                        image={photo_100}
                        id={id}
                        name={first_name}
                        surname={last_name}/>
                )
            });
        }

        return renderFilteredFriends();
    }

    return (
        <div className={styles.main}>
            <button type='button' onClick={onLogoutClick} className={styles.logout}>Выйти</button>
            {
                loginedUser &&
                <div className={styles.userWrapper}>
                    <a
                        href={`https://vk.com/id${loginedUser.id}`}
                        target='_blank'
                        rel='noreferrer noopener'
                        className={styles.userLinkWrapper}>
                        <img
                            className={styles.loginedUserAvatar}
                            src={loginedUser.photo_200}
                            alt={`Аватар пользователя ${loginedUser.first_name}`}
                            width='200'
                            height='200'/>
                        <p className={styles.loginedUserName}>
                            {`${loginedUser.first_name} ${loginedUser.last_name}`}
                        </p>
                    </a>
                </div>
            }
            {
                friends.length > 0 && <SearchBar setSearchString={setSearchString}/>
            }
            {
                searchString &&
                <p>Результаты поиска по запросу: "{searchString}"</p>
            }
            <div className={styles.cards}>
                {
                    renderFriends()
                }
            </div>
        </div>
    )
}