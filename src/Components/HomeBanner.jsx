import React from 'react'
import data from '../Constants.js'


const HomeBanner = () => {
  return (
    <div className="container mb-4">
    <div className="row">
      <div className="col bg-light text-dark p-5 d-flex align-items-center justify-content-center flex-column">
        <h5 className="text-success">Hi {data.user.firstName},</h5>
        <p>Get offers from sellers for your project</p>
        <a href="#" className="btn-sm btn btn-block btn-success">Post a Request</a>
      </div>
      <div className="col-md-8">
        <div className="background-image-1 d-flex flex-column">
          <div className="font-weight-bold d-flex flex-wrap align-items-center justify-content-between p-5 pb-1 text-light h-100">
              <div>
                <h4>{data.user.firstName},</h4>
                <h5>Here's what <span className="font-italic text-pink">you</span> need for your song</h5>
              </div>
              <div className="d-flex align-items-stretch justify-content-between text-sm">
                <div className="rounded py-2 px-3 bg-white text-dark">
                  <img src="Songwriters.svg" />
                  <p className="m-0 mt-2">Songwriters</p>
                </div>
                <div className="rounded py-2 px-3 ms-2 bg-white text-dark">
                  <img src="Producers _ Composers.svg" />
                  <p className="m-0 mt-2">Producers &amp; Songwriters</p>
                </div>
                <div className="rounded py-2 px-3 ms-2 bg-white text-dark">
                  <img src="Session Musicians.svg" />
                  <p className="m-0 mt-2">Songwriters</p>
                </div>
              </div>
          </div>
          <div className="px-5 py-3 d-flex justify-content-end
          ">
            <a href="#" className="text-sm">Learn How &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeBanner