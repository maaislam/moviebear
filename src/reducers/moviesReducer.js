


const initialState = {
    popular: [],
    topRated:[],
    nowPlaying:[],
    fullGenreList:[],
    searchResult:[],
    
    movieBtnClick:true,
    tvBtnClick:false,
    singleMedia:{},
    cast:[],
    modals:{
        trailerModal:false,
        signingModal:false
    },
    trailer:[]


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


    case 'MEDIA_SEARCH':
        return { ...state, searchResult:[ ...payload], searchRequest:true};

    /************************************************************* */
    case 'MOVIE_BTN_CLICK':
        return { ...state, movieBtnClick:true, tvBtnClick:false, singleMedia:{}, searchResult:[], searchRequest:false };
    case 'TV_BTN_CLICK':
        return { ...state, movieBtnClick:false, tvBtnClick:true, singleMedia:{}, searchResult:[],  searchRequest:false};
    /***************************************************************** */
    case 'FETCH_SINGLE_MEDIA':
        return { ...state, singleMedia:{...payload}, searchRequest:false  };
    case 'FETCH_CREDIT':
        return { ...state, cast:[...payload], searchRequest:false };
/******************************************************** */

    case 'TRAILER_BTN_CLICK':
        return { ...state, modals:{trailerModal:!state.modals.trailerModal} };
    
        case 'SIGNIN_BTN_CLICK':
        return { ...state, modals:{signingModal:!state.modals.signingModal}  };

/***************************************** */
    case 'FETCH_TRAILER':
        return { ...state, trailer:[...payload]};

/************************************ */

    default:
        return state
    }
}
