// import axios from '../core/axios';

export const checkLogin = (email, pass)=>{
    return new Promise((resolve, reject) => {
        if(email === 'test@gmail.com' && pass === '123') {
            localStorage.setItem('isLoggdin', 'true')
            resolve(true);
        } else {
            resolve(false)
        }
    });
}

export const userLogout = ()=>{
    localStorage.removeItem('isLoggdin');
}