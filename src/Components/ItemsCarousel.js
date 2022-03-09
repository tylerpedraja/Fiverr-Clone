import React from 'react'
import products from '../products'


class ItemsCarousel extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
      cartItems: 0
    }
  }
  render() {
      const maxTitleChars = 50;
    
      const minMax = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
      } 
    
      const addToCartHandler = () => {
        this.setState({cartItems: this.state.cartItems + 1})
      }
      return (
        <div>
          <div>Cart: {this.state.cartItems}</div>
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
                        <div className='d-flex align-items-center justify-content-between'>
                      <div className="btn btn-primary btn-sm mt-2 text-sm" onClick={addToCartHandler}>Add to Cart</div>
                      <div className="">Starting at <span className="text-success">${product.price}</span></div>
                          </div>
                    </div>
                 </div>
                </div>)}
              </div>
            </div>
        </div>
      )
}
}

export default ItemsCarousel
