import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Images = (props) => {
    const {user,views,downloads,webformatURL,likes,} = props.image;
    const tags = props.image.tags.split(',')
    const handleProduct = props.handleProduct
    return (
         <div className="card mb-5">
                  <img style={{height:'200px'}} src={webformatURL} alt=""/>
              <div className="card-body">
                        <h4 className="text-success">{user}</h4>
                        <h6> <strong>Views</strong> : {views}</h6>
                        <h6> <strong>Download </strong>: {downloads}</h6>
                        <h6> <strong> Price </strong>: $ {likes}</h6>
                  <div className="d-flex mt-3">
                   {
                       tags.map(tag=>(
                           <button className="tags" key={tag}>{tag}</button>
                    ))
                   }
              </div>
               <button className="btn btn-success mt-3" onClick={()=>handleProduct(props.image)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart </button>
          </div>
      </div>

    );
};

export default Images;