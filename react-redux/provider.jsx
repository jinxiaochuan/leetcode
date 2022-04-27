import React from 'react';
import { createStore } from '../redux';
import Context from './context';

function Provider(props) {
  const { store, children } = props;
  const contextValue = { store };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
