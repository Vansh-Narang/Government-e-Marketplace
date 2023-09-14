import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';
import { useState,useEffect } from 'react';

function App() {


 const url = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([])

    async function getProducts() {
        try {
            const response = await fetch(url)
            // console.log(data)
            const parsedData = await response.json()
            console.log(parsedData)
            setProducts(parsedData)
            console.log("Data is ")
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
    },)
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
