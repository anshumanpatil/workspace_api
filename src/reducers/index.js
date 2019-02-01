const initialState = {
    val: 10
};
function rootReducer(state = initialState, action) {
    console.log("action.type", action)
    if (action.type === "LOGIN") {
        return Object.assign({}, {
            val: action.type
        });
    } else if (action.type === "ERROR") {
        return Object.assign({}, {
            val: action.type
        });
    } else if (action.type === "OK") {
        return Object.assign({}, {
            val: action.type
        });
    } else {
        return state;
    }
};
export default rootReducer;