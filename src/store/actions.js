import { FETCH_USER } from "./types"

export const fetchUser = (user)=>{
    return {
        type : FETCH_USER,
        payload: user
    }
}