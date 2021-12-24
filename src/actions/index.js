export const increment = (nm) => {
    return {
        type: 'INCREASE',
        count: nm
    }
}

export const decrement = () => {
    return {
        type: 'DECREASE'
    }
}

export const login = () => {
    return {
        type: 'LOGIN'
    }
}