import React from 'react'

function ClassicWordDefinition({ word, meanings }) {
  return (

    <>    
      <div className="dictionary-content">
        <h2>{word}</h2>
        <div className="definitions">

          {meanings.length > 0 ? 
            meanings.map((meaning, index) => (
              <div key={index}>
                {meaning.definitions.map(definition => (
                  <div key={definition.definition}>{definition.definition}</div>
                ))}
                <div><br/></div>
              </div>
            ))
            :
            <div>I do not know what this word means!</div>
          }

        </div>

      </div>
    </>
  )
}
export default ClassicWordDefinition
