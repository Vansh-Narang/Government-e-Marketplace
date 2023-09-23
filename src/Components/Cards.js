
import Card from "./card";
function Cards({products,filterdata}) {
    // console.log("products=>",products);
    //  const [title,settitle]=useState("Flipkart");
    console.log(products);
    return (
     <div>
       <div className=' flex  justify-around text-gray-800 my-6  font font-semibold text-4xl'>
        <div className='  '>Flipkart</div>
        <div className='ml-10'>Amazon</div>
        <div className=' ml-20'> Gem</div>
        <div className=' pl-10'>Reliance Ajio</div>
     </div>
    
          <div className=''>
        {  
            products.map(product=>
            {
                return (
                    <div className='flex'> 
                    <Card product={product} key={product.id} title={"Flipkart"}
                      ></Card>
                      <Card product={product} key={product.id} title={"Amazon"}  ></Card>
                      <Card product={product} key={product.id} title={"Gem"} ></Card>    
                      <Card product={product} key={product.id} title={"Reliance Ajio"} ></Card>
                      
                      </div>
                      
                   
                )
            })
        }

        </div>
     </div>
      
    )
}

export default Cards