import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

import SignUpForm from '../../component/SignupForm';

type Props = {}
User.propTypes = {

};

function User(props: Props) {

    const [lang, setLang] = useState('')
    const languages = useSelector((state: any): any => state.changeLanguagesReducer)

    useLayoutEffect(() => {
        setLang(languages.lang)
    })

    return (
        <div>

            {lang === 'en' ? 'User' : 'Người dùng'}
            <Outlet />
        </div>
    );
}

export default User; 