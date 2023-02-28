console.log(Redux);
console.log(ReduxThunk);

//constant

const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSITE_MONEY = "DEPOSITE_MONEY";

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";
// const actionOne = {
//   type: "WITHDRAW_MONEY",
// };

// action Creators
const withdraw = (amount) => {
  return {
    type: WITHDRAW_MONEY,
    payload: amount,
  };
};

// const actionTwo = {
//   type: "DEPOSITE_MONEY",
// };

const deposite = (amount) => {
  return { type: DEPOSITE_MONEY, payload: amount };
};

const addProduct = (product) => {
  return { type: ADD_PRODUCT, payload: product };
};

// const getProduct = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   console.log(data);
// };

const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product,
  };
};

const fetchProduct = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    dispatch(getProduct(data));
  };
};

const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case WITHDRAW_MONEY:
      return state - action.payload;
    case DEPOSITE_MONEY:
      return state + action.payload;
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return [...action.payload];
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

const appReducer = Redux.combineReducers({
  bank: bankReducer,
  product: productsReducer,
});
const store = Redux.createStore(appReducer);

// store.dispatch(withdraw(100));
// store.dispatch(withdraw(200));

// store.dispatch(deposite(1000));
store.dispatch(addProduct({ id: 1, title: "product-1" }));

console.log(store.getState());
let amountInput = document.querySelector("#amount");
let amountValue = document.querySelector("#value");
amountValue.innerHTML = store.getState().bank;

document.querySelector("#withdraw").addEventListener("click", () => {
  store.dispatch(withdraw(+amountInput.value));
});

document.querySelector("#deposite").addEventListener("click", () => {
  store.dispatch(deposite(+amountInput.value));
});
store.subscribe(() => {
  console.log("CURRENT STATE", store.getState());
  amountValue.innerHTML = store.getState().bank;
});
