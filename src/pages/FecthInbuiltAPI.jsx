import { useEffect, useState } from "react"
import Loader from "../components/Loader/Loader"

const FecthInbuiltAPI = () => {
  const [products, setProducts]= useState([]);
  const [error, setError]= useState("");
  const [isLoading, setIsLoading]= useState(false);
  

  const fetchData = () => {
    setError("");
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error("Sorry, something went wrong")
        }
      })
      .then(data => {
        setIsLoading(false);
        setProducts(data)
        console.log(data)
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.message);
        console.log(error.message)
      })
  }

  useEffect(()=>{
    fetchData()
  },[]);

  return (
    <div >
      {isLoading && 
        <div className="flex">
          <Loader /><h2>Loading...</h2>
        </div>
      }

      {error && <h2>{error}</h2>}

      {products.length > 0 && (
        <div>
          {products.map((product) => (
            <div key={product.id} className="bg-purple-800 justify-center">
              <h2 className="mx-auto"> {product.title} </h2>
              <div className="flex">
                <img src={product.image} alt={product.name} className=" w-1/3 border rounded-md"/>
                <p>{product.description}</p>
              </div>
          </div>
          ))}
        </div>
      )}
     
    </div>
  )
}

export default FecthInbuiltAPI