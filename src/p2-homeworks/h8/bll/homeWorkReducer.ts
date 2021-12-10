
type ActionType = SortUpACType | SortDownACType
export const homeWorkReducer = (state: any, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            // need to fix
            return state
        }
        case 'SORT-DOWN': {
            // need to fix
            return state
        }
        default:
            return state
    }
}

export type SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
 return{
     type: 'SORT-UP',
 } as const
}

export type SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return{
        type: 'SORT-DOWN',
    } as const
}