export const signup = (user) => {
   return $.ajax({
        method: 'post',
        url: '/api/users',
        data_type: 'json',
        data: { user }
    })
}
export const login = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data_type: 'json',
        data: { user }
    });
};

export const logout = () => {
    
    return $.ajax({
        method: 'delete',
        url: 'api/session'
    });
};

