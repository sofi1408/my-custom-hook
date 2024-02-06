import {useState} from 'react'

import Cookies from 'js-cookie';

export const useLogin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('login') === 'true');

    const handleLogIn = () => {
        Cookies.set('login', 'true');
        setIsLoggedIn(true);
    }

    const handleLogOut = () => {
        Cookies.remove('login');
        setIsLoggedIn(false);
    }

    return{
        isLoggedIn,
        handleLogIn,
        handleLogOut,
    }
}