import React from 'react';
import Router from "next/router";

export default class AppHeader extends React.Component {
    render() {
        return (
          <header>
            <div className="site-navigation main_menu" id="mainmenu-area">
              <div className="no-container">
                <nav className="navbar navbar-expand-lg border-bottom-line py-0">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ width: 180 }}>
                      <img src="/static/assets/img/logo.webp" alt="honest-farm-logo" width="100%"/>
                    </a>
                    {/* Toggler */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarMenu"
                      aria-controls="navbarMenu"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="fa fa-bars" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarMenu">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbar2"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            About Us
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbar2">
                            <a className="dropdown-item" href="/#about">
                              Honest Farms
                            </a>
                            <a
                              className="dropdown-item"
                              target="_blank"
                              href="https://agrevolution.in/"
                            >
                              DeHaat
                            </a>
                          </div>
                        </li>
                        <li className="nav-item ">
                          <a href="/#usp" className="nav-link js-scroll-trigger">
                            Our USPs
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbar3"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Our Products
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbar3">
                            <a className="dropdown-item " href="/#product">
                              Rice
                            </a>
                            <a className="dropdown-item " href="/#product">
                              Pulses
                            </a>
                            <a className="dropdown-item " href="/#product">
                              Peanuts
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a href="" data-toggle="modal" data-target="#contact" className="nav-link">
                            Contact Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="/#certificate"
                            className="nav-link"
                            style={{ marginTop: "-8px" }}
                          >
                            <button className="btn btn-main py-2 media-center">
                              <span className="media-d-none">Get Your </span> Pesticide
                              Free Certificate
                            </button>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        )
    }
}