import React from 'react'

const List = ({wordList, setWord}) => {
  return (
    <div style={{ margin: "20px 0px" }}>
        {wordList?.map(x => <p onClick={() => setWord(x.word)}>{x.word}</p>)}
    </div>
  )
}

export default List