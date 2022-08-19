export const ACCOUNT_ACTION_TYPES = {
    OPEN_ACCOUNT: 'OPEN_ACCOUNT',
}

const INITIAL_STATE = {
    currentAccount: null
}

export const accountReducer = (state: any = INITIAL_STATE, action: any) => {
    const {type, payload} = action

    switch (type) {
        case ACCOUNT_ACTION_TYPES.OPEN_ACCOUNT:
            return {...state, currentAccount: payload};
        default:
            return state;
    }
};  