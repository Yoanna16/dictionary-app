import Heading from './Heading';
import Content from './Content';
import React, { useEffect, useState } from 'react';

function App() {
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const [word, setWord] = useState('');
const [result, setResult] = useState([])

const searchWord = async () => {
  const response = await fetch(url + word);
  const data = await response.json();
  setResult(data[0]);
  console.log(data)
}

useEffect(() => {
  searchWord();
}, [])


  return (
    <div className="container mx-auto px-10">
    <nav className="my-2 h-14 flex flex-row items-center">
      <h3 className="text-indigo-600 font-bold text-2x1">WordFinder</h3>
    </nav>
    <input
    type="text"
    value={word}
    onChange={(e) => setWord(e.target.value)}
    className="w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-4 shadow" />
    <button 
    onClick={searchWord}
    className="-mx-16 bg-gray-300 px-3 py-4 rounded-lg">
      Search
    </button>

    { result?.meanings?.length > 0 && (
      <> 
      <Heading searchWord={word} phonetic={result.phonetics[1].text} audioUrl={result.phonetics[0].audio}/>

      {result.meanings.map(content => {
        return  <Content {...content} />
      })}
      </>
    

    )}
    </div>
  )
}

export default App
