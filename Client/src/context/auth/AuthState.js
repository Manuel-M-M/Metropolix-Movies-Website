// import { useReducer } from "react";
// import AuthContext from "./AuthContext";
// import AuthReducer from "./AuthReducer";

// import { 
//     SUCCESS_SIGNIN, ERROR_SIGNIN, GET_USER,
//     SUCCESS_LOGIN, ERROR_LOGIN, LOGOUT
//  } from "../../types/index";

//  const AuthState  = props => {
//     const initialState = {
//         token: localStorage.getItem("token"),
//         authenticate: null,
//         user: null,
//         message: null
//     }

//     const [ state, dispatch ] = useReducer(AuthReducer, initialState);
        
//     const signUpUser = async data => {
//         const response = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         };
//         fetch('http://localhost:3000/user', response)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);

//                 if(data.error != undefined) {
//                     throw new Error(data.error.message)
//                 }
//                  //signInUser()
//         //         //setPostId(data.id)
//             })
//             .catch(function(error) {
//                 console.log(error);
//                 const alert = {
//                     message: error.message,
//                     category: "error-alert"
//                 }
//                 dispatch({
//                     type: ERROR_SIGNIN,
//                     payload: alert
//                 })
//             })
//          };

        


//     const signInUser = async data => {
//         const response = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         };
//         fetch('http://localhost:3000/login', response)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 dispatch({
//                     type: SUCCESS_SIGNIN,
//                     payload: data.token
//                 }) 



//                 // Llevarlo al home
//                 // If user is authenticated or signup or a duplicate signup
           
        

                
                
//              }).catch(function(error) {
//                 const alert = {
//                     message: error.response.data.message,
//                     category: "error-alert"
//                 }
//                 dispatch({
//                     type: ERROR_SIGNIN,
//                     payload: alert
//                 })
//             })
//     };
    
    
//     return(
//         <AuthContext.Provider
//             value={{
//                 token: state.token,
//                 authenticate: state.authenticate,
//                 user: state.user,
//                 message: state.message,
//                 signUpUser,
//                 signInUser
//             }}
//         >{props.children}
        
//         </AuthContext.Provider>
//     )
//  }

//  export default AuthState;