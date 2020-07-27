
const initialState = {
    allFavourite:[],
    favBtnClicked:false,
    isFavourite:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'FETCH_ALL_FAVOURITE':
        return { ...state, allFavourite:[...payload] }
    case 'CREATE_FAVOURITE':
        return { ...state, allFavourite:[...state.allFavourite,payload] , isFavourite:true}
    case 'DELETE_FAV':
        return { ...state, allFavourite:[...payload], isFavourite:false}
    case 'SET_FAVOURITE':
        return { ...state, isFavourite:true}
    case 'CLEAR_FAVOURITE':
        return { ...state, isFavourite:false, allFavourite:[]}

    default:
        return state
    }
}

