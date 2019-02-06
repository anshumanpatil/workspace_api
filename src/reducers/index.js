const initialState = {
    user: {},
    isLoading: false
};
function rootReducer(state = initialState, action) {
    switch(action.type){
        case "LOGIN":
            return Object.assign({}, state, {
                user: action.user
            });
        break;
        case "LOADING_START":
            return Object.assign({}, state, {
                isLoading: true
            });
        break;
        case "LOADING_END":
            return Object.assign({}, state, {
                isLoading: false
            });
        break;
        default:
            return state;
        break;
    }
};
export default rootReducer;