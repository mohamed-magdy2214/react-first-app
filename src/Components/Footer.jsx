import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="mainFooter">
      <div className="footer">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-sm-4">
              <h2>location</h2>
              <p>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
            <div className="col-md-4 mb-sm-4">
              <h2>about the web</h2>
              <div className="icon">
                <span><i class="fa-brands fa-facebook"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
                <span><i class="fa-brands fa-linkedin"></i></span>
                <span><i class="fa-solid fa-globe"></i></span>
              </div>
            </div>
            <div className="col-md-4 mb-sm-4">
              <h2>about freelancer</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
          <div className="foot text-center">
            <p className='pt-2'>Copyright © Your Website 2021</p>
          </div>
      </div>
    </>
  )
}
