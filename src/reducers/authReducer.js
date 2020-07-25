

const initialState = {
    userDetail:{
        name:'',
        email:'',
        password:''
    },
    googleSignInReq:false,
    facebookSignInReq:false,
    isSignedIn:null,
    signInForm:true,
    signUpForm:false,
    user:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SIGNIN_REQUEST':
        return { ...state, userDetail:{...payload}}
    case 'USER_SIGNED_IN':
        return { ...state,  isSignedIn:true, googleSignInReq:false, facebookSignInReq:false, user:{...payload}}
    case 'USER_SIGNED_OUT':
        return { ...state, userDetail:{email:'', password:''}, isSignedIn:false, googleSignInReq:false, facebookSignInReq:false, user:{}}
    case 'G_SIGN_IN_REQ':
        return { ...state, googleSignInReq:true, isSignedIn:false}
    case 'F_SIGN_IN_REQ':
        return { ...state, facebookSignInReq:true, isSignedIn:false}
    case 'SHOW_SIGN_IN_FORM':
        return { ...state, signInForm:true, signUpForm:false}
    case 'SHOW_SIGN_UP_FORM':
        return { ...state, signInForm:false, signUpForm:true}

    default:
        return state
    }
}
