import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from './Components/Home';
import About from "./Components/About";
import Contact from './Components/Contactus';
import Cards from './Components/Cards';
function App() {


 const url = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([]);
    const [loader,setloader]= useState(false);

    async function getProducts() {
        try {
          setloader(true);
            const response = await fetch(url)
          
            const parsedData = await response.json()
            setloader(false);
            setProducts(parsedData);
          
        } catch (error) {
            console.log(error)
        }
    }
function filterdata(title)
{
  const newproduct=products.filter((product)=>
  {
    return (title!==product.title);
  });
  setProducts(newproduct);
}

    useEffect(() => {
        getProducts();
    },[])
  return (
    <div className=" h-screen w-screen overflow-hidden">
          <Navbar />
          <SearchBar></SearchBar>
          <div><Routes>
          <Route path="/" element={loader?<Spinner/>:<Cards filterdata={filterdata} products={products}/>} ></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
           
            <Route path="*" element={<h1>Page Not Found 404</h1>}></Route>
          </Routes></div>
          
    </div>
  );
}

export default App;
