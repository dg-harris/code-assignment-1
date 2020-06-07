import React from 'react'
import { Dropdown } from 'semantic-ui-react'

interface CategoryOption {
  key: string
  value: string
  text: string
}
const categories: CategoryOption[] = [
  { key: 'fashion', value: 'fashion', text: 'Fashion' },
  { key: 'nature', value: 'nature', text: 'Nature' },
  { key: 'backgrounds', value: 'backgrounds', text: 'Backgrounds' },
  { key: 'science', value: 'science', text: 'Science' },
  { key: 'education', value: 'education', text: 'Education' },
  { key: 'people', value: 'people', text: 'People' },
  { key: 'feelings', value: 'feelings', text: 'Feelings' },
  { key: 'religion', value: 'religion', text: 'Religion' },
  { key: 'health', value: 'health', text: 'Health' },
  { key: 'places', value: 'places', text: 'Places' },
  { key: 'animals', value: 'animals', text: 'Animals' },
  { key: 'industry', value: 'industry', text: 'Industry' },
  { key: 'food', value: 'food', text: 'Food' },
  { key: 'computer', value: 'computer', text: 'Computer' },
  { key: 'sports', value: 'sports', text: 'Sports' },
  { key: 'transportation', value: 'transportation', text: 'Transportation' },
  { key: 'travel', value: 'travel', text: 'Travel' },
  { key: 'buildings', value: 'buildings', text: 'Buildings' },
  { key: 'business', value: 'business', text: 'Business' },
  { key: 'music', value: 'music', text: 'Music' },
]

export const CategoryDropdown: React.FC<{
  selected: string
  onChange: (selection: string) => void
}> = ({ selected, onChange }) => {
  return (
    <Dropdown
      options={categories}
      placeholder="Category..."
      clearable
      fluid
      onChange={(_, data) => onChange(data.value ? data.value.toString() : '')}
      value={selected}
    />
  )
}
