const initialState = {
    value: 0,
    color: ""
}

const reducer = (state = initialState, action) => {
    let { type, color, customvalue } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
        }
    } else if(type === "DECREMENT") {
        return {
            value: state.value - 1,
            color: state.color
        }
    } else if(type === "INCREMENT_BY_FIVE") {
        return {
            value: state.value + 5,
            color: state.color
        }
    } else if(type === "DECREMENT_BY_FIVE") {
        return {
            value: state.value - 5,
            color: state.color
        }
    } else if(type === "CHANGE_COUNTER_COLOR") {
        return {
            value: state.value,
            color: color
        }
    } else if(type === "CUSTOM_COUNTER_VALUE") {
        //set if statement to check if user presses enter with no value after initial
        //value has changed not to run, user must enter value to change counter
        if(customvalue !== "") {
            return {
                value: parseInt(customvalue),
                color: state.color
            }
        }
    }
    return state
}