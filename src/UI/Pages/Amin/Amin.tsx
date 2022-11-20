import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { type } from 'os';
import { useSelector } from 'react-redux'



type Props = {}
Admin.propTypes = {

};

function Admin(props: Props) {

    const [lang, setLang] = useState('')
    const languages = useSelector((state: any): any => state.changeLanguagesReducer)
    
    useLayoutEffect(() => {
        setLang(languages.lang)
    })

    return (
        <div>
            {lang === 'en' ? 'Admin' : 'Quản lí'}
           
        </div>
    );
}

export default Admin; 