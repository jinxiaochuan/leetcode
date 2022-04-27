import React, { useContext, useLayoutEffect, useReducer } from 'react';
import Context from './context';
import shallowEqual from './shallowEqual';

function storeStateUpdatesReducer(count) {
  return count + 1;
}

function connect(mapStateToProps, mapDispatchToProps) {
  return function connectHOC(WrappedComponent) {
    function Component(props) {
      function childPropsSelector(store, wrapperProps) {
        const { getState, dispatch } = store;
        const state = getState();

        // 执行mapStateToProps和mapDispatchToProps
        const stateProps = mapStateToProps(state);
        const dispatchProps = mapDispatchToProps(dispatch);

        return Object.assign({}, stateProps, dispatchProps, wrapperProps);
      }

      const { ...wrapperProps } = props;
      const { store } = useContext(Context);
      // 记录上次渲染参数
      const lastChildProps = useRef();
      const [, forceComponentUpdateDispatch] = useReducer(
        storeStateUpdatesReducer,
        0
      );

      const actualChildProps = childPropsSelector(store, wrapperProps);

      useLayoutEffect(() => {
        lastChildProps.current = actualChildProps;
      }, []);

      store.subscribe(() => {
        const newChildProps = childPropsSelector(store, wrapperProps);
        if (!shallowEqual(newChildProps, lastChildProps.current)) {
          lastChildProps.current = newChildProps;

          // 强制更新当前组件
          forceComponentUpdateDispatch();
        }
      });

      return <WrappedComponent {...actualChildProps}></WrappedComponent>;
    }
    return Component;
  };
}
