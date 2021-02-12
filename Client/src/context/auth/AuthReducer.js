import { Switch } from "react-router-dom";
import { 
    SUCCESS_SIGNIN, ERROR_SIGNIN, GET_USER,
    SUCCESS_LOGIN, ERROR_LOGIN, LOGOUT
 } from "../../types/index";

export default (state, action) => {
    switch(action.type) {
        case SUCCESS_SIGNIN:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                authenticate: true,
                message: null

            }

        case ERROR_SIGNIN:
            return{
                ...state,
                token: null,
                message: action.payload
            }
        
        default:
            return state;
    }
}