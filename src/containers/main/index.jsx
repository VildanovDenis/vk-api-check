import React, { useEffect, useState } from 'react';

export const Main = () => {
    const [state, setState] = useState([]);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        window.VK.Api.call('friends.get', {v:"5.73", fields: 'first_name, last_name, photo_200_orig'}, function(r) {
            if(r.response) {
                setState(r.response.items);
            }
        });
    }, [])
    const renderFriends = () => {
        if (inputValue === '') {
            return state.map((friend, _) => {
                const {id, first_name, last_name, photo_200_orig} = friend;
                return (
                    <a key={id} href={`https://vk.com/id${id}`} target='_blank' rel='noreferrer noopener'>
                        <img
                            src={photo_200_orig}
                            alt={`Аватар пользователя ${first_name} ${last_name}`}/>
                        <p>
                            {`${first_name} ${last_name}`}
                        </p>
                    </a>
                )
            })
        }

        const renderArray = state.filter(friend => {
            const {first_name, last_name} = friend;
            const friendName = `${first_name} ${last_name}`;
            const re = new RegExp(inputValue, 'g');
            if (re.test(friendName)) {
                return friend;
            }
        });

        return renderArray.map(friend => {
            const {id, first_name, last_name, photo_200_orig} = friend;
                return (
                    <a key={id} href={`https://vk.com/id${id}`} target='_blank' rel='noreferrer noopener'>
                        <img
                            src={photo_200_orig}
                            alt={`Аватар пользователя ${first_name} ${last_name}`}/>
                        <p>
                            {`${first_name} ${last_name}`}
                        </p>
                    </a>
                )
        })
    }
    return (
        <div>
            <h1>Main page</h1>
            <input type='text' onChange={e => setInputValue(e.target.value)} disabled={state.length === 0} value={inputValue}/>
            {
                renderFriends()
            }
        </div>
    )
}