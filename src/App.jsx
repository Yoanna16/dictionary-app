
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

    <div className="flex flex-row justify-between my-5" >
      <h3 className="font-bold text-3x1 font-serif">
      Human 
      <span className="block font-normal text-sm text-indigo-600">/?fj*nk</span>
      </h3>
      <button className="bg-indigo-300 rounded-full h-16 w-16">Play</button>
    </div>

    <div className="my-3">
      <div className="flex flex-row items-center text-lg font-bold font-serif">
        <p>Noun</p>
        <hr className="w-full ml-10"/>
      </div>
      <p className="text-gray-800 mt-3 font-semibold">Meaning</p>
      <ul className="list-disc px-10 text-gray-800 text-sm space-y-2">
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolore minima voluptate molestiae adipisci. Eos, sint?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolore minima voluptate molestiae adipisci. Eos, sint?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolore minima voluptate molestiae adipisci. Eos, sint?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolore minima voluptate molestiae adipisci. Eos, sint?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolore minima voluptate molestiae adipisci. Eos, sint?</li>
      </ul>
    </div>
    </div>
  )
}

export default App
