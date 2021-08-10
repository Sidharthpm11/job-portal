// import axios from '../core/axios';

export const checkLogin = (email, pass)=>{
    return new Promise((resolve, reject) => {
        if(email === 'test@gmail.com' && pass === '123') {
            resolve(true);
        } else {
            resolve(false)
        }
    });
}