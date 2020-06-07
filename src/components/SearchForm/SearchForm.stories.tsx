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

export const test = () => {
  return (
    <div>
      <select
        multiple
        onChange={(event) => action('change')(event.target.value)}
      >
        <option value={'test1'}>First option</option>
        <option value={'test2'}>Second option</option>
        <option value={'test3'}>Third option</option>
      </select>
    </div>
  )
}
