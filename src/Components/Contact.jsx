import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact text-center my-3">
        <h1>contact section</h1>
        <div className="icon d-flex align-items-center justify-content-center">
          <div className="me-3"></div>
          <i className='fa-solid fa-star'></i>
          <div className="ms-3"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="form w-50 mx-auto mt-5 mb-3">
            <input type="text" placeholder='userName' className='form-control border-0 border-bottom py-3 mb-4'/>
            <input type="text" placeholder='userAge' className='form-control border-0 border-bottom py-3 mb-4'/>
            <input type="email" placeholder='userEmail' className='form-control border-0 border-bottom py-3 mb-4'/>
            <input type="password" placeholder='userPassword' className='form-control border-0 border-bottom py-3 mb-4'/>
            <button className="btn text-white">send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}
