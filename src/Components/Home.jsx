import React from 'react'

export default function Home() {
  return (
    <>
        <div className="home text-center py-3 text-white">
          <div className="image w-25 mx-auto mb-3">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-100 rounded-5' alt="" />
          </div>
          <div className="content">
            <h1 className='text-uppercase'>first framework</h1>
          </div>
          <div className="icon d-flex align-items-center justify-content-center">
            <div className="me-3"></div>
            <i className='fa-solid fa-star'></i>
            <div className="ms-3"></div>
          </div>
          <p className='my-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </>
  )
}
