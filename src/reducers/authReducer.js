

const initialState = {
    userDetail:{
        email:'',
        password:''
    },
    googleSignInReq:false,
    facebookSignInReq:false,
    isSignedIn:null,
    user:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SIGNIN_REQUEST':
        return { ...state, userDetail:{...payload}}
    case 'USER_SIGNED_IN':
        return { ...state, userDetail:{email:'', password:''}, isSignedIn:true, googleSignInReq:false, user:{...payload}}
    case 'USER_SIGNED_OUT':
        return { ...state, userDetail:{email:'', password:''}, isSignedIn:false, googleSignInReq:false, user:{}}
    case 'G_SIGN_IN_REQ':
        return { ...state, googleSignInReq:true, isSignedIn:false}
    case 'F_SIGN_IN_REQ':
        return { ...state, facebookSignInReq:true, isSignedIn:false}

    default:
        return state
    }
}
