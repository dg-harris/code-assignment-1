import React from 'react'
import App from './App'
import Axios from 'axios'
import axiosMockAdapter from 'axios-mock-adapter'
import { action } from '@storybook/addon-actions'
import { mockImageResponse } from './services/mock-image-response'
export default {
  title: 'App',
  component: App,
}

export const app = () => {
  const axiosMock = new axiosMockAdapter(Axios)
  axiosMock.onGet('https://pixabay.com/api/').reply((request) => {
    action('request')(request)
    return [200, mockImageResponse]
  })
  return <App />
}
