const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREASE':
            return state + action.count
        case 'DECREASE':
            return state - 1
        default: 
            return state
    }
}

export default counterReducer