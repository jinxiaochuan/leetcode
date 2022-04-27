const { createStore, combineReducers, applyMiddleware } = require('./redux');

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

function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    };
  };
}

function logger2(store) {
  return function (next) {
    return function (action) {
      let result = next(action);
      console.log('logger2');
      return result;
    };
  };
}

// 使用combineReducers组合两个reducer
const reducer = combineReducers({
  milkState: milkReducer,
  riceState: riceReducer,
});

let store = createStore(reducer, applyMiddleware(logger, logger2));

// subscribe其实就是订阅store的变化，一旦store发生了变化，传入的回调函数就会被调用
// 如果是结合页面更新，更新的操作就是在这里执行
store.subscribe(() => console.log(store.getState()));

// 操作🥛的action
store.dispatch({ type: 'PUT_MILK', count: 1 }); // { milkState: { milk: 1 }, riceState: { rice: 0 } }
store.dispatch({ type: 'PUT_MILK', count: 1 }); // { milkState: { milk: 2 }, riceState: { rice: 0 } }
store.dispatch({ type: 'TAKE_MILK', count: 1 }); // { milkState: { milk: 1 }, riceState: { rice: 0 } }

// 操作🍚的action
store.dispatch({ type: 'PUT_RICE', count: 1 }); // { milkState: { milk: 1 }, riceState: { rice: 1 } }
store.dispatch({ type: 'PUT_RICE', count: 1 }); // { milkState: { milk: 1 }, riceState: { rice: 2 } }
store.dispatch({ type: 'TAKE_RICE', count: 1 }); // { milkState: { milk: 1 }, riceState: { rice: 1 } }
