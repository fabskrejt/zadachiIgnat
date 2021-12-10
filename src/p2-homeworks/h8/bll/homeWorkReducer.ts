type ActionType = SortUpACType | SortDownACType | FilterAgeACType
export const homeWorkReducer = (state: any, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            // need to fix
            return [...state].sort((a, b) => a.name > b.name ? 0 : -1)
        }
        case 'SORT-DOWN': {

            return [...state].sort((a, b) => a.name > b.name ? -1 : 0)
        }
        case 'FILTER-BY-AGE': {
            return [...state].filter(i => i.age >= 18)
        }
        default:
            return state
    }
}

export type SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'SORT-UP',
    } as const
}

export type SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
    } as const
}

export type FilterAgeACType = ReturnType<typeof filterAgeAC>
export const filterAgeAC = () => {
    return {
        type: 'FILTER-BY-AGE',
    } as const
}

