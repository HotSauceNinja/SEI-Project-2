/* eslint-disable indent */

import React from 'react'

import { getClassicDictionaryDefinition, getUrbanDictionaryDefinition } from '../src/lib/api'
import SearchForm from './components/SearchForm'
import ClassicWordDefinition from './components/ClassicWordDefinition'
import UrbanWordDefinition from './components/UrbanWordDefinition'

function App() {

  const [wordSearched, setWordSearched] = React.useState('')
  const [definitions, setDefinitions] = React.useState({
    classic: null,
    urban: null,
  })

  React.useEffect(() => {
    if (!wordSearched) return

    const getData = async () => {
      const classic = getClassicDictionaryDefinition(wordSearched)
      const urban = getUrbanDictionaryDefinition(wordSearched)
      const { data: classicData } = await classic
      const { data: urbanData } = await urban
      setDefinitions({ urban: urbanData, classic: classicData[0] })
  }
    getData()  
    
    // only want to change when the word changes (onSubmit is when we want to capture whats in the search box)
  }, [wordSearched])



  const { urban, classic } = definitions
  // console.log(urban, classic)
  // console.log('should return the word to define',wordSearched)
  console.log(urban)

    return (
      <>
          <header>
            <h1>CONTRA DICTIONARY</h1>
          </header>
          <main>
            <div className="search-box-wrapper">
              <SearchForm setSearchTerm={setWordSearched}/>
            </div>
            <div className="dictionary-wrapper">
              <div className="classic-dictionary">
                {!classic ?
                  <p>CLASSIC <br /> DICTIONARY</p>
                  :
                  <ClassicWordDefinition { ...classic } />
                }
              </div>
              <div className="urban-dictionary">
                {!urban ?
                  <p>URBAN DICTIONARY</p>
                  :
                  <UrbanWordDefinition { ...urban } />
                }
              </div>
            </div>
          </main>

      </>
    )
  }
  export default App