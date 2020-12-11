import React from 'react'

function UrbanWordDefinition({ list }) {
  return (
    <>
      <div className="dictionary-content">

        <h2 id="title-font">{list[0].word}</h2>
        <div><br/></div>
        <div><br/></div>

        {list.map((meaning, index) => (
          <div key={index}>
            {meaning.definition} <br />
            <div><br/></div>

            {meaning.example ?
              (<div> Example: {meaning.example} </div>) 
              :
              <div></div>}
              
            <div><br/></div>
            <div>***</div>
            <div><br/></div>
          </div>
        ))}

      </div>
    </>
  )
}
export default UrbanWordDefinition