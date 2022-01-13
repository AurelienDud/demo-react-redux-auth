import React, { FunctionComponent } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Router from '@src/router'
import store from '@src/states/store'

/**
 * APP
 * Manage providers and global services
 */
const App:FunctionComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
)

export default App
