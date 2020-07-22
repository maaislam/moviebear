import {movieDb} from '../api/movieDb'

const api_key = '5ac6ab23fe284516bb2dfd4a4d6936fa'




export const fetchSingleMedia = (media_type,id) => {
    
    return async (dispatch) => {

        const response = await movieDb.get(`/${media_type}/${id}`,{
            params: {
                api_key:api_key
            }
        });
        console.log(response.data)
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
        console.log(response.data.cast)
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
