import React from 'react';

export default class AppFooter extends React.Component {
    render() {
        return (
          <footer className="footer bg-black xs-center">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mr-auto col-sm-6 col-md-6">
                    <div className="footer-widget footer-about mb-5 mb-lg-0">
                      <a href="/"><img src="/static/assets/img/logo.webp" alt="honest-farm-logo-footer" className="img-fluid mx-xs-auto" width="200px" /></a>
                      <p className="mt-3">
                        Every Honest Farms product is a result of direct collaboration between over a million farmers from all over the country, and DeHaat.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6 col-md-6">
                    <div className="footer-widget footer-about mb-5 mb-lg-0">
                      <h5 className="widget-title">Corporate Office</h5>
                      <ul className="list-unstyled">
                        <li><p>901, 9th Floor,BPTP PARK Centra, Sector 30, Gurugram, Haryana 122021</p></li>
                      </ul>
                      <ul className="list-inline footer-socials">
                        <li className="list-inline-item"><a href="https://www.facebook.com/DeHaatTM/"><i className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item"> <a href="https://www.instagram.com/dehaat/?hl=en"><i className="fab fa-instagram" /></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/dehaat/"><i className="fab fa-linkedin" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/DeHaatTM?s=09"><i className="fab fa-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="footer-widget footer-contact mb-5 mb-lg-0">
                      <h5 className="widget-title">Contact Info</h5>
                      <ul className="list-unstyled">
                        <li><a href="mailto:care@agrevolution.in"><i className="fa fa-envelope" />care@agrevolution.in</a></li>
                        <li><a href="tel:0114118-3123"><i className="fa fa-phone" />(011)-4118-3123</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-btm">
              <div className="copyright-bg bg-black">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="copyright text-lg-left text-center">
                        <p>All Rights Reserved by <a target="_blank" href="https://agrevolution.in/">DeHaat |</a> Agrevolution 2022</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="footer-btm-menu text-lg-right text-center">
                        <a target="_blank" href="https://agrevolution.in/privacy-policy">Privacy Policy</a>
                        <a target="_blank" href="https://agrevolution.in/terms_&_condition">Term &amp; conditions</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}