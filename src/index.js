const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const incrementBy5Btn = document.getElementById('increment-5');
const decrementBy5Btn = document.getElementById('decrement-5');
const colorSelect = document.getElementById('colors');
const changeCounterBtn = document.getElementById('changeCounter');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));
decrementButton.addEventListener('click', () => {
    dispatch({type: "DECREMENT"});
});
incrementBy5Btn.addEventListener('click', () => {
    dispatch({type: "INCREMENT_BY_FIVE"});
});
decrementBy5Btn.addEventListener('click', () => {
    dispatch({type: "DECREMENT_BY_FIVE"});
});
colorSelect.addEventListener('change', (e) => {
    dispatch({type: "CHANGE_COUNTER_COLOR", color: e.target.value});
});
changeCounterBtn.addEventListener('change', (e) => {
    dispatch({type: "CUSTOM_COUNTER_VALUE", customvalue: e.target.value});
});