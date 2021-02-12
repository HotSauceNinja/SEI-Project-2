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

  }, [wordSearched])

  const { urban, classic } = definitions

  // console.log(urban)

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
              <p id="title-font">CLASSIC <br /> DICTIONARY</p>
              :
              <ClassicWordDefinition { ...classic } />
            }
          </div>

          <div className="urban-dictionary">
            {!urban ?
              <p id="title-font">URBAN DICTIONARY</p>
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