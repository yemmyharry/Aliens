const userInitialState = [];
export default (state = userInitialState, action) => {
    switch (action.type) {
        case 'NEW_USER':
            return [...state, action.users];
            default: return state;
    }
};