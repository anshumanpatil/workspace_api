const initialState = {
    user: {}
};
function rootReducer(state = initialState, action) {
    
    if (action.type === "LOGIN") {
        return Object.assign({}, state, {
            user: action.user
        });
    } else if (action.type === "ERROR") {
        console.log("action.user", action)
        return Object.assign({}, {
            user : action
        });
    } else if (action.type === "OK") {
        return Object.assign({}, state, {
            user: action.type
        });
    } else {
        return state;
    }
};
export default rootReducer;