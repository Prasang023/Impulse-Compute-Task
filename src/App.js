import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import List from './components/List';
import Format from './components/Format';

function App() {
  
  const [startingLetter, setStartingLetter] = useState(65);
  const [wordList, setWordList] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  const getWords = (ch) => {
    axios({
      method: 'get',
      url: `https://api.datamuse.com/words?sp=${ch}*&max=7`,
      responseType: 'stream'
    })
      .then(function (response) {
        setWordList(JSON.parse(response?.data));
      });
  }

  const setWord = (word) => {
    setSelectedWord(word);
  }

  useEffect(() => {
    setTimeout(() => {
      let tmp = startingLetter;
      if(tmp+1===91) tmp=64;
      tmp+=1;
      setStartingLetter(tmp);
    }, 1000);
  }, [startingLetter])
  
  return (
    <div className="App">
      <div className="container">
        {[...Array(5)].map((x, i) =>
          <p className='letterContainer' onClick={()=>getWords(String.fromCharCode((startingLetter+i)>90?(((startingLetter+i)%90)+64):(startingLetter+i)))}>{String.fromCharCode((startingLetter+i)>90?(((startingLetter+i)%90)+64):(startingLetter+i))}</p>
        )}
      </div>
      {wordList?<List wordList={wordList} setWord={setWord} />:null}
      <div className="formatting-container">{selectedWord?<Format selectedWord={selectedWord} />:null}</div>
    </div>
  );
}

export default App;
