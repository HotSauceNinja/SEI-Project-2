import React from 'react'

function UrbanWordDefinition({ list }) {


  return (
    <>
      <div>
        <h2>{list[0].word}</h2>
        <h4>{list[0].definition}</h4>
      </div>
    </>
  )
}

export default UrbanWordDefinition