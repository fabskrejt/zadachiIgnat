const initState = {
loading: false
}

type InitialStateType = typeof initState
export const loadingReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING-STATUS': {
            return {...state, loading: action.loadingStatus}
        }
        default: return state
    }
}

type ActionType = LoadingActionType

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loadingStatus: boolean) => {
    return{
        type: 'SET-LOADING-STATUS',
        loadingStatus,
    } as const
} // fix any