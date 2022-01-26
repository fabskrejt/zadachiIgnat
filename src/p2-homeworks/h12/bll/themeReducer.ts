const initState = {
    theme: 'some'
};

type InitialStateType = typeof initState
export const themeReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME" : {debugger
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


type ActionType = changeThemeActionType

type changeThemeActionType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => {debugger
    return {
        type: 'CHANGE-THEME',
        theme,
    } as const
}; // fix any