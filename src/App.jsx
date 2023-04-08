import Heading from './Heading';
import Content from './Content';

function App() {
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'
  return (
    <div className="container mx-auto px-10">
    <nav className="my-2 h-14 flex flex-row items-center">
      <h3 className="text-indigo-600 font-bold text-2x1">WordFinder</h3>
    </nav>
    <input type="text" className="w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-4 shadow" />
    <button className="-mx-16 bg-gray-300 px-3 py-4 rounded-lg">
      Search
    </button>
    <Heading />
    <Content />

    </div>
  )
}

export default App
