import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBar } from '../../components/searchBar';
import { FriendCard } from '../../components/friendCard';

import { VkService } from '../../services/Vk';

export const ProtectedMain = () => {
    const [state, setState] = useState([]);
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
                .then(res => setState(res.response.items))
                .catch(err => console.error(err))
        }
    }, [loginedUser]);

    const onLogoutClick = () => (
        VkService.killAuth()
            .then(() => routerHistory.push('/login'))
            .catch(err => console.error(err))
    );

    const renderFilteredFriends = () => {
        const renderArray = state.filter(friend => {
            const {first_name, last_name} = friend;
            const friendName = `${first_name} ${last_name}`.toLowerCase();
            const re = new RegExp(searchString.toLowerCase(), 'g');
            if (re.test(friendName)) {
                return friend;
            }
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
            return state.map(friend => {
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
        <div className='main'>
            <h1 className='main__title'>My friends</h1>
            <button type='button' onClick={onLogoutClick}>Выйти</button>
            <SearchBar setSearchString={setSearchString}/>
            {
                loginedUser &&
                <div>
                    <a
                        href={`https://vk.com/id${loginedUser.id}`}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='main__card'>
                        <img
                            src={loginedUser.photo_200}
                            alt={`Аватар пользователя ${loginedUser.first_name}`}
                            width='200'
                            height='200'/>
                        <p>
                            {`${loginedUser.first_name} ${loginedUser.last_name}`}
                        </p>
                    </a>
                </div>
            }
            {
                searchString &&
                <p>Результаты поиска по запросу: "{searchString}"</p>
            }
            <div className='main__cards'>
                {
                    renderFriends()
                }
            </div>
        </div>
    )
}