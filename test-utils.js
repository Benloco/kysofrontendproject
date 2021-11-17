import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import {rootReducers} from './redux/store/store'
import { ToastProvider } from "react-toast-notifications";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducers, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (  <ToastProvider autoDismiss={true} autoDismissTimeout={5000}>
                  <Provider store={store}>{children}</Provider> 
            </ToastProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }