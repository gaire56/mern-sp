import React from 'react';
import anantpic from '../images/anant1.jpg';

const About = () => {
  return (
    <>
      <div className="container emp-profile mt-5">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={anantpic} alt="anant" width="200px" height="200px" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Anant Gaire</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING: <span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            {/**Left side urls */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="https://www.anantgaire.com.np/" target="_anant">
                  Website
                </a>

                <br />
                <a href="https://github.com/gaire56" target="_anant">
                  GitHub
                </a>
                <br />

                <a href="https://www.instagram.com/gaire_babu/" target="_anant">
                  Instagram
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/anant-gaire-b4950a186/"
                  target="_anant"
                >
                  LinkedIn
                </a>
                <br />
                <a href="https://www.facebook.com/gaire.anant/" target="_anant">
                  Facebook
                </a>
              </div>
            </div>
            {/**Right side data toogle */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="User Id">User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>01234567</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Anant Gaire</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Anant Gaire</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Anant Gaire</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Anant Gaire</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Anant Gaire</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Export</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;

//test
