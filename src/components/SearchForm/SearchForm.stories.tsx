import React from 'react'
import { SearchForm } from './SearchForm'
import { action } from '@storybook/addon-actions'
export default {
  title: 'Search Form',
  component: SearchForm,
}

export const searchForm = () => {
  return <SearchForm searchFunction={action('Search')} />
}
