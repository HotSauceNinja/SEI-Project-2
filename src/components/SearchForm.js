import React from 'react'
import useLocation from 'react'

function SearchForm({ setSearchTerm }) {

  const [ formdata, setFormdata ] = React.useState('')
  const handleChange = (event) => {
    setFormdata(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchTerm(formdata)
    setFormdata('')
  }

  const location = useLocation()
  console.log(location)

  return (
    <div className="search-box"> 
      <form onSubmit={handleSubmit}>
        <input 
          className="input-field"
          placeholder="Search for a word"
          onChange={handleChange}
        />
        <button type="submit" className="button">Search!</button>
      </form>
    </div>
  )
}

export default SearchForm