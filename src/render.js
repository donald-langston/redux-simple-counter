const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    const elements = document.getElementsByTagName('h1')[0];
    counterDOM.innerHTML = state.value;
    elements.style.color = state.color;
}