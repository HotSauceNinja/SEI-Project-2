import React from 'react'

function ClassicWordDefinition({ word, meanings, phonetics }) {


  return (
    <>
      <div>
        <h2>{word}</h2>
        <h4>{phonetics[0].text} &nbsp; | &nbsp; {meanings[0].partOfSpeech}</h4>
        <h4>{meanings[0].definitions[0].definition}</h4>
      </div>
    </>
  )
}

export default ClassicWordDefinition
