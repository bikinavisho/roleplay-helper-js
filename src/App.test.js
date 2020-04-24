import React from 'react'
import { render } from '@testing-library/react';
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import initStore from './redux/initStore'

it('renders without crashing', () => {
  expect(() => {
    render(

        <Provider store={initStore()}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>

    )
  }).not.toThrow();
})
