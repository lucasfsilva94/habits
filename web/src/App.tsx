import "./styles/global.css";

function App() {
  return (
    <div>
      <h1 className="text-4xl text-purple-700 ml-2">Hello World</h1>
      <div className="flex flex-row">
        <div className="bg-purple-700 h-10 w-10 mt-2 ml-2"></div>
        <div className="bg-purple-600 h-10 w-10 mt-2 ml-2"></div>
        <div className="bg-purple-400 h-10 w-10 mt-2 ml-2"></div>
        <div className="bg-purple-200 h-10 w-10 mt-2 ml-2"></div>
      </div>
    </div>
  );
}

export default App;
