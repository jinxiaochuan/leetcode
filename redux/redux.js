function createStore(reducer, enhancer) {
  let state; // state记录所有状态
  let listeners = []; // 保存所有注册的回调

  if (enhancer && typeof enhancer === 'function') {
    const newCreateStore = enhancer(createStore);
    const newStore = newCreateStore(reducer);
    return newStore;
  }

  // subscribe就是将回调保存下来
  function subscribe(callback) {
    listeners.push(callback);
  }

  // dispatch就是将所有的回调拿出来依次执行就行
  function dispatch(action) {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  // getState直接返回state
  function getState() {
    return state;
  }

  // store包装一下前面的方法直接返回
  const store = {
    subscribe,
    dispatch,
    getState,
  };

  return store;
}

function combineReducers(reducerMap) {
  // 先把参数里面所有的键值拿出来
  const reducerKeys = Object.keys(reducerMap);

  // 返回值是一个普通结构的reducer函数
  const reducer = (state = {}, action) => {
    const newState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const currentReducer = reducerMap[key];
      const prevState = state[key];
      newState[key] = currentReducer(prevState, action);
    }

    return newState;
  };

  return reducer;
}

function compose(middlewares) {
  return middlewares.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

function applyMiddleware(...middlewares) {
  return function enhancer(createStore) {
    return function newCreateStore(reducer) {
      const store = createStore(reducer);
      const chainMiddleware = middlewares.map((middleware) =>
        middleware(store)
      );
      const composeMiddleware = compose(chainMiddleware);

      // 增强dispatch
      const newDispatch = composeMiddleware(store.dispatch);
      return {
        ...store,
        dispatch: newDispatch,
      };
    };
  };
}

module.exports = { createStore, combineReducers, applyMiddleware };
