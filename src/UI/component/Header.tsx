import React from 'react';


import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom'

import { changeLanguage } from '../../main/services/i18n/changeLang';
import '../../main/services/i18n/i18n'

type Props = {}





function Header(props: Props) {

    const { t } = useTranslation();

   
 
   



    
    return (
        <div>
            HEADER

            <div>
                <ul>
                    <li><button onClick={() => changeLanguage('vi')}>Vi</button></li>
                    <li><button onClick={() => changeLanguage('en')}>En</button></li>
                </ul>
            </div>

            <ul>
                <li><Link to='/'>{t('Home')}</Link></li>
                <li><Link to='/Admin'>  {t('Admin')} </Link></li>
                <li><Link to='/User'> {t('User')}</Link></li>
                <li><Link to='/EnterPrise'> {t('EnterPrise')} </Link></li>


            </ul>
        </div>
    );
}

export default Header;