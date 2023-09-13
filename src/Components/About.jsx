import React from "react";

export default function About() {
  return (
    <>
      <div className="home text-center text-white about">
        <div className="content">
          <h1 className="text-uppercase">About component</h1>
        </div>
        <div className="icon d-flex align-items-center justify-content-center">
          <div className="me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="ms-3"></div>
        </div>
        <div className="desc my-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
