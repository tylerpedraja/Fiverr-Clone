import React from 'react'
import products from '../products'

const ItemsCarousel = ( qty ) => {

  const minMax = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  } 

  const maxTitleChars = 50;

  return (
    <div>
        <div className="container">
         <div className="d-flex justify-content-between mb-1">
           <h4 className="d-block">Recently viewed &amp; more</h4>
           <a href="#">See All 	&rarr;</a>
          </div>
          <div className="row">
            {/* generate random products */}
           {products.map(product => <div className="col-md-3 mt-2">
              <div className="card">
                <img variant="top" style={{ width: '301px', height: '180px' }} src={`https://picsum.photos/${minMax(195, 205)}`} />
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <img src={product.thumbnailUrl} className="product-thumbnail" /> 
                    <div className="product-title">{product.title.length > maxTitleChars ? `${product.title.substring(0, maxTitleChars)}...` : product.title}</div>
                    </div>
                  <button className="btn w-100 btn-primary mt-2 text-sm">Starting at ${product.price}</button>
                </div>
             </div>
            </div>)}
            {/*  */}
          </div>
        </div>
    </div>
  )
}

export default ItemsCarousel
