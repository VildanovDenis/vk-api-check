import React, { useEffect, useState } from 'react';

import { SearchBar } from '../../components/searchBar';
import { FriendCard } from '../../components/friendCard';

import { callApi } from '../../api/callApi';

export const Main = () => {
    const [state, setState] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [error, setError] = useState('');

    const fetchFriends = async () => {
        try {
            const r = await callApi(
                'friends.get',
                {
                    fields: 'first_name, last_name, photo_100'
                }
            );
            setState(r.response.items);
        } catch(err) {
            setError(err);
        }
    };
    
    useEffect(() => {
        fetchFriends();
    }, [])

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

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className='main'>
            <h1 className='main__title'>My friends</h1>
            <SearchBar setSearchString={setSearchString}/>
            <div className='main__cards'>
                {
                    renderFriends()
                }
            </div>
        </div>
    )
}