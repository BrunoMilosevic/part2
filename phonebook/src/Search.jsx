import React from 'react'

const Search = ({filter, handleFilter}) => {
  return (
    <div>
      <div>
          filter shown with: <input value={filter} onChange={handleFilter} />
        </div>
    </div>
  )
}

export default Search
