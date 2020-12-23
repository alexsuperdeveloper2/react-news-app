const initialState = {
    token: localStorage.getItem('token'),
    isAllowedtoLogIn:false,
    erros:{}
}


const authReducer = (state = initialState , action) => {
    const {type , payload} = action;
    switch(type){
        default:
            return state;
    }
}


export default authReducer;