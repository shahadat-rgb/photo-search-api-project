import React from 'react';
import { useEffect, useState } from 'react';
import Images from '../Images/Images';
import ImageSearch from '../imageSearch/ImageSearch';
import './Product.css'
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
const Product = () => {
  const [images,setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [term , setTerm] = useState('')
  const [cart,setCart] =useState([])
  
  useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
              setImages(data.hits.slice(0,6))
              setIsLoading(false);
            })
            .catch(error => console.log(error))
 },[term])
 
const handleProduct=(product)=>{  
     const newCart = [...cart,product];
     setCart(newCart);
 }
 
  return (
     <>
       <div className="banner">
             <ImageSearch searchText={(text)=> setTerm(text)}></ImageSearch>
         </div>
            <div className="container">
                 <div className="row">
                   <div className="col-md-9">
                     {
                      !isLoading && images.length === 0 &&  <h1 className="text-center text-danger mt-5">No Images Found......</h1>
                     }
                 {
                    isLoading ? 
                    <h1 className="text-center mt-5">Loading........</h1> 
                    : 
                    <div id="card-header">
                        {
                            images.map(image => <Images key={image.id} handleProduct={handleProduct} image={image}></Images>)
                        }
                    </div>
                 }
               </div>
             <div className="col-md-3">
                <Cart cart={cart}></Cart>
           </div>
         </div>
       </div>
      <Footer></Footer>
     </>
    );
};

export default Product;