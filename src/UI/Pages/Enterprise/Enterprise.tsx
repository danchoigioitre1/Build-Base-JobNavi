import React from 'react';
import PropTypes from 'prop-types';
import { type } from 'os';
import {useState,useLayoutEffect} from 'react'
import {useSelector} from 'react-redux'


type Props = {}
Enterprise.propTypes = {

};

function Enterprise(props: Props) {
    const [lang, setLang] = useState('')
    const languages = useSelector((state: any): any => state.changeLanguagesReducer)

    useLayoutEffect(() => {
        setLang(languages.lang)
    })

    return (
        <div>
           {lang === 'en' ? 'EnterPrise' : 'Doanh nghiệp'}
        </div>
    );
}

export default Enterprise; 