import React from 'react'
import Router from "next/router"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/static/assets/img/logo.webp'

export default class AppHeader extends React.Component {
    render() {
        return (
          <header>
            <div className="site-navigation main_menu" id="mainmenu-area">
              <div className="no-container">
                <nav className="navbar navbar-expand-lg border-bottom-line py-0">
                  <div className="container-fluid">
                    <Link href="/">
                      <a className="navbar-brand" style={{ width: 180 }}>
                        <Image className="d-block mx-auto" src={Logo} alt="honest-farm-logo"/>
                      </a>
                    </Link>
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
                          <Link href="#">
                            <a
                              className="nav-link dropdown-toggle"
                              id="navbar2"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              About Us
                            </a>
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbar2">
                            <Link href="/#about">
                              <a className="dropdown-item">
                                Honest Farms
                              </a>
                            </Link>
                            <Link href="https://agrevolution.in/">
                              <a
                                className="dropdown-item"
                                target="_blank"
                              >
                                DeHaat
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item ">
                          <Link href="/#usp">
                            <a className="nav-link js-scroll-trigger">
                              Our USPs
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link href="#">
                            <a
                              className="nav-link dropdown-toggle"
                              id="navbar3"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Our Products
                            </a>
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbar3">
                            <Link href="/#product">
                              <a className="dropdown-item">
                                Rice
                              </a>
                            </Link>
                            <Link href="/#product">
                              <a className="dropdown-item">
                                Pulses
                              </a>
                            </Link>
                            <Link href="/#product">
                              <a className="dropdown-item">
                                Peanuts
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link href="">
                            <a data-toggle="modal" data-target="#contact" className="nav-link">
                              Contact Us
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/#certificate">
                            <a
                              className="nav-link"
                              style={{ marginTop: "-8px" }}
                            >
                              <button className="btn btn-main py-2 media-center">
                                <span className="media-d-none">Get Your </span> Pesticide
                                Free Certificate
                              </button>
                            </a>
                          </Link>
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