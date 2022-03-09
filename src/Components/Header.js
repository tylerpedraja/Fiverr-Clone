import React from 'react'
import data from '../Constants.js'

const minMax = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
} 

const randomGender = () => {
  let num = minMax(0, 102.5);

  return num > 50 ? 'men' : 'women'
}

const Header = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container d-flex align-items-center justify-content-between">
          <nav className="navbar navbar-expand-lg navbar-dark d-block">
                <div className="d-flex align-items-center">
                  <div>
                    <a className="navbar-brand" href="#">{data.site.name}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                  <div>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 d-flex ms-4">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0 ms-2" type="submit">Search</button>
                    </form>
                  </div>
                  </div>
                </div>
          </nav>
          <img style={{ borderRadius: '50%', height: '50px', display: 'block' }} src={`https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`} />
        </div>
      </div>
    </>
  )
}

export default Header


