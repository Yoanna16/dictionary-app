
function App() {

  return (
    <div className="container">
    <nav className="m-5 h-14 flex flex-row items-center">
      <h3 className="text-indigo-600 font-bold text-2x1">WordFinder</h3>
    </nav>
    <input type="text" className="m-5 w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-4 shadow" />
    <button className="-mx-16 bg-gray-300 px-3 py-4 rounded-lg">Search</button>
    </div>
  )
}

export default App
