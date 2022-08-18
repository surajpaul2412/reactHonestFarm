import Head from 'next/head'
import {useState} from 'react'

export default function ContactFormModal() {
  return (
    <div
		  className="modal"
		  id="contact"
		  tabIndex={-1}
		  role="dialog"
		  aria-hidden="true"
		>
		  <div
		    className="modal-dialog modal-dialog-centered modal-lg border-none"
		    style={{ borderRadius: 0 }}
		    role="document"
		  >
		    <div className="modal-content bg-white p-0">
		      <div className="modal-header border-none pb-0">
		        <h4 className="heading text-black text-capitalize font-weight-600 mr-auto pt-1">
		          Contact Us !
		        </h4>
		        <button
		          type="button"
		          className="close pub-close"
		          id="close-glassAnimals"
		          data-dismiss="modal"
		          aria-label="Close"
		        >
		          <picture>
                <source srcSet="/static/assets/img/close-button.webp" type="image/webp" />
                <img src="/static/assets/img/close-button.png" alt="close-modal" style={{ width: 35 }} />
              </picture>
		        </button>
		      </div>
		      <div className="modal-body p-0">
		        <div className="row">
		          <div className="col-md-12 col-12">
		            <div className="card">
		              <div className="row media-px-1">
		                <div className="col-md-5 col-12">
		                  <div className="bg-success py-5 text-white px-4">
		                    901, 9th Floor,BPTP PARK Centra, Sector 30, Gurugram,
		                    Haryana 122021
		                    <br />
		                    <br />
		                    <div className="footer-widget footer-contact">
		                      <ul className="list-unstyled">
		                        <li>
		                          <a
		                            href="mailto:care@agrevolution.in"
		                            className="text-white"
		                          >
		                            <i className="fa fa-envelope text-white" />
		                            care@agrevolution.in
		                          </a>
		                        </li>
		                        <li>
		                          <a href="tel:0114118-3123" className="text-white">
		                            <i className="fa fa-phone text-white" />
		                            (011)-4118-3123
		                          </a>
		                        </li>
		                      </ul>
		                    </div>
		                  </div>
		                </div>
		                <div className="col-md-7 col-12">
		                  <form className="pr-4" action="" method="">
		                    <div className="form-row">
		                      <div className="col-12 col-md-6 mt-3">
		                        <input
		                          type="text"
		                          maxLength={255}
		                          name="Name_First"
		                          fieldtype={7}
		                          className="form-control"
		                          placeholder="First name"
		                          required=""
		                        />
		                      </div>
		                      <div className="col-12 col-md-6 mt-3">
		                        <input
		                          fieldtype={9}
		                          type="email"
		                          name="Email"
		                          className="form-control"
		                          checktype="c5"
		                          placeholder="Email"
		                          required=""
		                        />
		                      </div>
		                    </div>
		                    <div className="form-row">
		                      <div className="col-12 col-md-12 mt-3">
		                        <input
		                          type="text"
		                          className="form-control"
		                          placeholder="Contact Number"
		                          compname="PhoneNumber"
		                          name="PhoneNumber_countrycode"
		                          maxLength={20}
		                          checktype="c7"
		                          defaultValue=""
		                          phoneformat={1}
		                          iscountrycodeenabled="false"
		                          fieldtype={11}
		                          id="international_PhoneNumber_countrycode"
		                          valtype="number"
		                          phoneformattype={2}
		                          required=""
		                        />
		                      </div>
		                      <div className="col-12 col-md-12 mt-3">
		                        <textarea
		                          id="form_message"
		                          name="message"
		                          className="form-control"
		                          placeholder="Message for Us *"
		                          rows={2}
		                          required=""
		                          data-error="Please,leave us a message."
		                          defaultValue={""}
		                        />
		                      </div>
		                    </div>
		                    <button
		                      type="submit"
		                      className="btn btn-main2 d-block mt-3 py-2 mx-auto"
		                    >
		                      Submit
		                    </button>
		                  </form>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
  );
}