

const initialState = {
    userDetail:{
        email:'',
        password:''
    },
    isSignedIn:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SIGNIN_REQUEST':
        return { ...state, userDetail:{...payload}}
    case 'USER_SIGNED_IN':
        return { ...state, userDetail:{email:'', password:''}, isSignedIn:true}
    case 'USER_SIGNED_OUT':
        return { ...state, userDetail:{email:'', password:''}, isSignedIn:false}

    default:
        return state
    }
}
