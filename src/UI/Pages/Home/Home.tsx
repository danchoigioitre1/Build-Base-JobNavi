import React from 'react';
import PropTypes from 'prop-types';

import {useState,useLayoutEffect} from 'react'
import {useSelector} from 'react-redux'




type Props = {}
Home.propTypes = {

};

function Home(props:Props) {

    const [lang, setLang] = useState('')
    const languages = useSelector((state: any): any => state.changeLanguagesReducer)
   
    useLayoutEffect(() => {
        setLang(languages.lang)
    })

    return (
        <div>
             {lang === 'en' ? 'Home' : 'Trang chủ'}
        </div>
    );
}

export default Home; 