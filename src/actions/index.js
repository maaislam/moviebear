import {movieDb} from '../api/movieDb'

import users from '../api/users'

import history from '../history'

/**
 * *learn ways to hide api key*
 */
const api_key = '5ac6ab23fe284516bb2dfd4a4d6936fa'


export const searchMedia = (mediaType, formValues) => {
    
    return async (dispatch) => {

        const response = await movieDb.get(`/search/${mediaType}`,{
            params:{
                api_key:api_key,
                query:formValues.search,
                page:1
                
            }
        });
        
        dispatch({type: 'MEDIA_SEARCH', payload: response.data.results})
        history.push('/');
       
    }
    
};






export const fetchVideo = (media_type, id) => {
    
    return async (dispatch) => {

        const response = await movieDb.get(`/${media_type}/${id}/videos`,{
            params: {
                api_key:api_key
            }
        });
        
        dispatch({type: 'FETCH_TRAILER', payload: response.data.results})
    }
    
};

export const fetchSingleMedia = (media_type,id) => {
    
    return async (dispatch) => {

        const response = await movieDb.get(`/${media_type}/${id}`,{
            params: {
                api_key:api_key
            }
        });
       
        dispatch({type: 'FETCH_SINGLE_MEDIA', payload: response.data})
    }
    
};
export const fetchCredit = (media_type,id) => {
    
    return async (dispatch) => {

        const response = await movieDb.get(`/${media_type}/${id}/credits`,{
            params: {
                api_key:api_key
            }
        });
        
        dispatch({type: 'FETCH_CREDIT', payload: response.data.cast})
    }

};





export const fetchPopularMedia = (media) => {


    return async (dispatch) => {
        const response = await movieDb.get(`/${media}/popular`,{
            params: {
                api_key:api_key
            }
        });
        //console.log(response.data.results)
        dispatch({type:'POPULAR_MEDIA', payload: response.data.results});

    }
};
export const fetchNowPlayingMedia = (media) => {

    const query = media==='tv'?'on_the_air':'now_playing'

    return async (dispatch) => {
        const response = await movieDb.get(`/${media}/${query}`,{
            params: {
                api_key:api_key
            }
        });
        //console.log(response.data.results)
        dispatch({type:'NOW_PLAYING_MEDIA', payload: response.data.results});

    }
};
export const fetchTopRatedMedia = (media) => {


    return async (dispatch) => {
        const response = await movieDb.get(`${media}/top_rated`,{
            params: {
                api_key:api_key
            }
        });
       // console.log(response.data.results)
        dispatch({type:'TOP_RATED_MEDIA', payload: response.data.results});

    }
};
export const fetchGenreList = (media) => {


    return async (dispatch) => {
        const response = await movieDb.get(`/genre/${media}/list`,{
            params: {
                api_key:api_key
            }
        });
        //console.log(response.data.genres)
        dispatch({type:'GENRE_List', payload: response.data.genres});

    }
};


export const onMovieBtnClick = () => ({
    type: 'MOVIE_BTN_CLICK',
    
});
export const onTvBtnClick = () => ({
    type: 'TV_BTN_CLICK',
    
});
export const openTrailerModal = () => ({
    type: 'TRAILER_BTN_CLICK',
    
});
export const toggleSigningModal = () => ({
    type: 'SIGNIN_BTN_CLICK',
    
});

export const onSubmit = (formValues) => ({
    type: 'SIGNIN_REQUEST',
    payload:formValues
    
});

export const userSignedIn = (signedUser) => ({
    type: 'USER_SIGNED_IN',
    payload: signedUser
    
});
export const userSignedOut = () => ({
    type: 'USER_SIGNED_OUT',
    
    
});
export const googleSignInRequest = () => ({
    type: 'G_SIGN_IN_REQ', 
});
export const facebookSignInRequest = () => ({
    type: 'F_SIGN_IN_REQ', 
});
export const showSignInForm = () => ({
    type: 'SHOW_SIGN_IN_FORM', 
});
export const showSignUpForm = () => ({
    type: 'SHOW_SIGN_UP_FORM', 
});
export const searchRequest = () => {
    
    return {
        type: 'SEARCH_REQUEST'
    }
}



/**
 * *for the purpose of storing user specific favourite and watched lsit
 */
export const favBtnClick = () => ({
    type: 'FAV_BTN_CLICK', 
});




 export const createFavourite = (userFav) => {
     
     return async (dispatch, getState) => {

        const {user} = getState().auth

         const response = await users.post(`/favourites`, {...userFav, ...user});

         
 
         dispatch({type: 'CREATE_FAVOURITE', payload: response.data})
     }
     
 };

 export const deleteFav = (id,index) => {
     
     return async (dispatch, getState) => {

        
        const {allFavourite} = getState().favourite
         await users.delete(`/favourites/${id}`);

        const favs = [...allFavourite];
        favs.splice(index, 1)
 
         dispatch({type: 'DELETE_FAV', payload: favs})
     }
     
 };

 export const setFavourite = () => ({
    type: 'SET_FAVOURITE'
})
 export const clearFavourite = () => ({
    type: 'CLEAR_FAVOURITE'
})



export const getCurrentUserFavs = (userId) => {
    
    return async (dispatch) => {

        const response = await users.get(`/favourites`,{
            params:{
                q:userId
            }
        });
       
        dispatch({type:'FETCH_ALL_FAVOURITE', payload:response.data})
    }
    
};