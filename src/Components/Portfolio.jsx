import React from 'react'

export default function Portfolio() {
  return (
    <>
      <div className="portfolio my-2">
        <div className="content text-center">
            <h1 className='text-uppercase'>portfolio component</h1>
        </div>
        <div className="icon d-flex align-items-center justify-content-center">
            <div className="me-3"></div>
            <i className='fa-solid fa-star'></i>
            <div className="ms-3"></div>
          </div>
          <div className="container mt-5">
            <div className="row gx-5 gy-5">
              <div className="col-md-4">
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100 rounded-3' alt="" />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className='fa solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
              <div className="col-md-4">
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-100 rounded-3' alt="" />
                <div className="layer d-flex justify-content-center align-items-center">
                <i className='fa solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
              <div className="col-md-4">
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-100 rounded-3' alt="" />
                <div className="layer d-flex justify-content-center align-items-center">
                <i className='fa solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
              <div className="col-md-4">
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100 rounded-3' alt="" />
                <div className="layer d-flex justify-content-center align-items-center">
                <i className='fa solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
              <div className="col-md-4">
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-100 rounded-3' alt="" />
                <div className="layer d-flex justify-content-center align-items-center">
                <i className='fa solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
              <div className="col-md-4">
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-100 rounded-3' alt="" />
                <div className="layer d-flex justify-content-center align-items-center">
                <i className='fa solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
