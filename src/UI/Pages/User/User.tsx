import React from 'react';

import { Outlet } from 'react-router-dom';


type Props = {}
User.propTypes = {

};

function User(props: Props) {

  
    return (
        <div>

           USER
            <Outlet />
        </div>
    );
}

export default User; 