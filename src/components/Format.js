import React from 'react'

function addSpace(str) {
    return str.split('').join(' ');
  }

const format = ({ selectedWord }) => {
  return (
    <div className="wordStyle">
        <p className="verticalText" style={{ margin: "20px 0px" }}>{[...selectedWord].forEach(c => <p>{c}</p>)}</p>
        <p className="slantedText" style={{ margin: "20px 0px" }}>{selectedWord}</p>
        <p className="spacedText" style={{ margin: "20px 0px" }}>{addSpace(selectedWord)}</p>
    </div>
  )
}

export default format