import React from 'react'
import axios from 'axios'
import { getClassicDictionaryDefinition } from '../src/lib/api'

const urbanOptions = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: { term: 'fairy' },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_MY_URBAN_API_KEY,
    'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
  },
}

axios.request(urbanOptions).then(function (response) {
  console.log(response.data)
}).catch(function (error) {
  console.error(error)
})



function App() {

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getClassicDictionaryDefinition()
      console.log('classic dictionary =', data)
    }
    getData()
  }, [])


  return (
    <>
      <header>
        <h1>WORKING TITLE</h1>
      </header>
      <main> 
        <div className="input-box">
          <h3>Search for your word below</h3>
          <form>
            <input className="searchBox" />
            <button type="submit" className="button">Search!</button>
          </form>
        </div>
        
        <div className="dictionary-wrapper">
          <div className="oxford-dictionary">
            <h2>Oxford content goes here</h2>
          </div>

          <div className="urban-dictionary">
            <h2>Urban content goes here</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
