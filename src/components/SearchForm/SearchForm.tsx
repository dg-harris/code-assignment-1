import React, { useState } from 'react'
import './SearchForm.css'
import { Input, Button } from 'semantic-ui-react'
import { CategoryDropdown } from './CategoryDropdown'

interface SearchFormProps {
  searchFunction: (keyword: string, category: string) => void
}

export const SearchForm: React.FC<SearchFormProps> = ({ searchFunction }) => {
  const [keywordValue, setKeywordValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const submitSearch = () => searchFunction(keywordValue, categoryValue)
  return (
    <div className="search-form">
      <Input
        onChange={(event) => setKeywordValue(event.target.value)}
        placeholder="Keyword..."
        input={
          <input
            onKeyDown={(event) =>
              event.key === 'Enter' ? submitSearch() : null
            }
          />
        }
      />
      <CategoryDropdown onChange={setCategoryValue} selected={categoryValue} />
      <Button onClick={submitSearch} className="search-button">
        Search
      </Button>
    </div>
  )
}
