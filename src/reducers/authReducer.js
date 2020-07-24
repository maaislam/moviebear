

const initialState = {
    userDetail:{
        email:'',
        password:''
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SIGNIN_REQUEST':
        return { ...state, userDetail:{...payload}}

    default:
        return state
    }
}
