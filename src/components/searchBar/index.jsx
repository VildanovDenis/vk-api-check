import React, { useState } from 'react';

import styles from './index.module.css';

export const SearchBar = ({setSearchString}) => {
    const [inputValue, setInputValue] = useState('');
    const [isDynamic, setIsDynamic] = useState(false);
    const onToggleCheckbox = () => setIsDynamic(!isDynamic);
    const onSearchButtonClick = () => setSearchString(inputValue);
    const onClearSearchClick = () => {
        setSearchString('');
        setInputValue('');
    }

    const onChange = e => {
        setInputValue(e.target.value);
        if (isDynamic) {
            setSearchString(e.target.value);
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                value={inputValue}
                onChange={onChange}
                type='text'
                className={styles.input}
                placeholder='Введите имя друга'/>
            <button type='button' onClick={onSearchButtonClick} className={styles.button}>Найти</button>
            <button type='button' onClick={onClearSearchClick} className={styles.button}>Очистить</button>
            <input
                id='search-bar-dynamic-toggle'
                type='checkbox'
                value={isDynamic}
                onChange={onToggleCheckbox}
                className={styles.checkbox}/>
            <label htmlFor='search-bar-dynamic-toggle' className={styles.checkboxLabel}>
                <span>Искать динамически</span>
            </label>
        </div>
    )
}