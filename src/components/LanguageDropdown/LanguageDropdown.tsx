import { stringify } from 'querystring';
import React, { useState } from 'react';
import { Option } from 'react-dropdown';
import { Dropdown } from './LanguageDropdownStyle';

const LanguageDropdown = ({langs, currentLang, setLocale}: any): JSX.Element => {

    const onSelect = (value: Option): void => {
        setLocale(value.value);
    }

    const languages: Array<Option> = langs.map( (lang: {name: string, code: string}) => {
        return { value: lang.code, label: lang.name }
    })

    return (
        <Dropdown
        options={languages}
        onChange={onSelect}
        value={currentLang} 
        />
    )
}

export default LanguageDropdown;