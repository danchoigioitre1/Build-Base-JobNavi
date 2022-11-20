import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


import { LocalStorageAdapter } from '../../infra/cache/local-storage';
import { Link } from 'react-router-dom'
import { LANGUAGES } from '../constant/'
import { changeLanguages } from '../../common/Redux/action/changeLangAction';


type Props = {}

Header.propTypes = {

};

Header.defaultProps = {


}

function Header(props: Props) {
  

    const dispatch = useDispatch()
    const languages = useSelector((state: any): any => state.changeLanguagesReducer)
   



    const handleChangeLanguages = (lang: any) => {
        dispatch(changeLanguages(lang))


    }


    return (
        <div>
            HEADER

            <div>
                <ul>
                    <li><button onClick={() => handleChangeLanguages(LANGUAGES.VI)}>Vi</button></li>
                    <li><button onClick={() => handleChangeLanguages(LANGUAGES.EN)}>En</button></li>
                </ul>
            </div>

            <ul>
                <li><Link to='/'> {languages.lang === 'en' ? 'Home' : 'Trang chủ'} </Link></li>
                <li><Link to='/Admin'>  {languages.lang === 'en' ? 'Admin' : 'Quản lí'} </Link></li>
                <li><Link to='/User'> {languages.lang === 'en' ? 'User' : 'Người dùng'}</Link></li>
                <li><Link to='/EnterPrise'> {languages.lang === 'en' ? 'EnterPrise' : 'Doanh nghiệp'} </Link></li>


            </ul>
        </div>
    );
}

export default Header;