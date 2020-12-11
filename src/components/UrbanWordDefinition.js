import React from 'react'

function UrbanWordDefinition({ list }) {
  return (
    <>
      { console.log('urban list ', list) }
      <div className="dictionary-content">
        <h2>{list[0].word}</h2>

        {list.map((meaning, index) => (
          <div key={index}>
            {meaning.definition} <br />
            <div><br/></div>
          </div>
        ))}

      </div>
    </>
  )
}
export default UrbanWordDefinition