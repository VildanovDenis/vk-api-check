import React, { useState } from 'react';

export const SearchBar = ({setSearchString}) => {
    const [inputValue, setInputValue] = useState('');
    const [isDynamic, setIsDynamic] = useState(false);
    const onToggleCheckbox = () => setIsDynamic(!isDynamic);
    const onSearchButtonClick = () => setSearchString(inputValue);
    const onClearSearchClick = () => setSearchString('');

    const onChange = e => {
        setInputValue(e.target.value);
        if (isDynamic) {
            setSearchString(e.target.value);
        }
    };

    return (
        <div>
            <input value={inputValue} onChange={onChange} type='text'/>
            <button type='button' onClick={onSearchButtonClick}>Применить</button>
            <button type='button' onClick={onClearSearchClick}>Очистить</button>
            <label>
                <input type='checkbox' value={isDynamic} onChange={onToggleCheckbox}/>
                <span>Искать динамически</span>
            </label>
        </div>
    )
}