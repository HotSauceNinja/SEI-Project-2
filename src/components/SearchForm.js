import React from 'react'

function SearchForm({ setSearchTerm }) {

  const [ formdata, setFormdata ] = React.useState('')
  const handleChange = (event) => {
    setFormdata(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchTerm(formdata)
  }


  return (
    <div className="input-box"> 
      <h3>Search for your word below</h3>
      <form onSubmit={handleSubmit}>
        <input 
          className="searchBox"
          placeholder="Search word"
          onChange={handleChange}
        />
        <button type="submit" className="button">Search!</button>
      </form>
    </div>
  )
}

export default SearchForm