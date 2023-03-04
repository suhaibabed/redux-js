console.log("hello world");
console.log(Redux);

initState = {
  counter: 1,
};
const counterReducers = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, counter: state.counter + action.payload.number };
  } else if (action.type === "decrease") {
    return { ...state, counter: state.counter - action.payload.number };
  }
  return state;
};

const store = Redux.createStore(counterReducers);

const counterApp = () => {
  document.getElementById("counter").innerHTML = store.getState().counter;
};
counterApp();

store.subscribe(counterApp);

document.getElementById("increase").addEventListener("click", () => {
  //   const action = { type: "increase", payload: { number: 5 } };
  store.dispatch({ type: "increase", payload: { number: 5 } });
});

document.getElementById("decrease").addEventListener("click", () => {
  //   const action = { type: "decrease", payload: { number: 2 } };
  store.dispatch({ type: "decrease", payload: { number: 2 } });
});
