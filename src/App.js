import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';

function App() {
  


  return (
    <div className="bg-[#fafafa]">
      <div>
        <div className="text-center">
          <Navbar />
          <SearchBar />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
