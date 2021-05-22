import React, { useState } from 'react';
import man2 from '../../images/man2.png'
import Navbar from '../Navbar/Navbar';
import './ImageSearch.css'
const ImageSearch = ({searchText}) => {
    const [text,setText] = useState('')

     const onSubmit=(e)=>{
         e.preventDefault();
         searchText(text);
     }
    return (
        <div className="container">
          <Navbar></Navbar>
        <div className="row align-items-center m-auto mt-3">
            <div className="col-md-8"> 
            <form action="" onSubmit={onSubmit}>
            <h2>You can find image anything you like</h2>
                <div className="d-flex mb-5">
                    <input onChange={e=>setText(e.target.value)} type="text" className="input-box" placeholder="Search Image term..."/>
                    <button type="submit" className="btn btn-info text-white">Search</button>
                </div>
            </form>
     
            </div>
            <div className="col-md-4">
                  <img style={{width:'100%',height:'240px'}} src={man2} alt="" />
            </div>
        </div>
        </div>
    );
};

export default ImageSearch;