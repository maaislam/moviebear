


const initialState = {
    popular: [],
    topRated:[],
    nowPlaying:[],
    fullGenreList:[],
    movieBtnClick:true,
    tvBtnClick:false,
    singleMedia:{},
    cast:[]


}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'POPULAR_MEDIA':
        return { ...state, popular:[ ...payload] };
    case 'NOW_PLAYING_MEDIA':
        return { ...state, nowPlaying:[ ...payload] };
    case 'TOP_RATED_MEDIA':
        return { ...state, topRated:[ ...payload] };
    case 'GENRE_List':
        return { ...state, fullGenreList:[ ...payload] };
    /*************************************************************** */
    case 'MOVIE_BTN_CLICK':
        return { ...state, movieBtnClick:true, tvBtnClick:false };
    case 'TV_BTN_CLICK':
        return { ...state, movieBtnClick:false, tvBtnClick:true };
    /***************************************************************** */
    case 'FETCH_SINGLE_MEDIA':
        return { ...state, singleMedia:{...payload} };
    case 'FETCH_CREDIT':
        return { ...state, cast:[...payload] };
/******************************************************** */

    default:
        return state
    }
}
