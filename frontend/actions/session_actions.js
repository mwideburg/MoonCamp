import * as APIUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const login = user => dispatch =>(
    APIUtil.login().then(user => {
        return dispatch(recieveCurrentUser(user))
    })
)
export const logout = user => dispatch =>{
    return APIUtil.logout().then(() => {
            return dispatch(logoutCurrentUser())
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
}
export const signup = user => dispatch =>(
    APIUtil.signup().then((user) => dispatch(recieveUser(user)))
)