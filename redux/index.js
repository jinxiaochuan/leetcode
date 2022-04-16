const { createStore, combineReducers } = require('./redux');

const initState = {
  milk: 0,
};

function milkReducer(state = initState, action) {
  switch (action.type) {
    case 'PUT_MILK':
      return { ...state, milk: state.milk + action.count };
    case 'TAKE_MILK':
      return { ...state, milk: state.milk - action.count };
    default:
      return state;
  }
}

const initRiceState = {
  rice: 0,
};
function riceReducer(state = initRiceState, action) {
  switch (action.type) {
    case 'PUT_RICE':
      return { ...state, rice: state.rice + action.count };
    case 'TAKE_RICE':
      return { ...state, rice: state.rice - action.count };
    default:
      return state;
  }
}

// 使用combineReducers组合两个reducer
const reducer = combineReducers({
  milkState: milkReducer,
  riceState: riceReducer,
});

let store = createStore(reducer);

// subscribe其实就是订阅store的变化，一旦store发生了变化，传入的回调函数就会被调用
// 如果是结合页面更新，更新的操作就是在这里执行
store.subscribe(() => console.log(store.getState()));

// 将action发出去要用dispatch
store.dispatch({ type: 'PUT_MILK', count: 1 }); // milk: 1
store.dispatch({ type: 'PUT_MILK', count: 1 }); // milk: 2
store.dispatch({ type: 'TAKE_MILK', count: 1 }); // milk: 1
