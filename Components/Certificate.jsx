import React from 'react'

export default function Certificate() {
	return (
		<section className="deal pt-5" id="certificate" style={{ overflowX: "hidden !important" }}>
		  <div className="row">
		    <div className="col-lg-12 deal-inner">
		      <div className="container">
		        <div className="row align-items-center">
		          <div className="col-lg-5">
	            	<picture>
		                <source srcSet="/static/assets/img/certify.webp" type="image/webp" />
		                <img className="img-fluid mx-xs-auto deal-img123" src="/static/assets/img/certify.png" alt="honest-farm-certificate" />
		            </picture>
		          </div>
		          <div className="col-lg-1" />
		          <div className="col-lg-6 py-5">
		            <div className="deal-info section-heading">
		              <h3 className="text-capitalize">
		                Get your pesticide free guarantee certificate
		              </h3>
		              <form
		                action="https://forms.zohopublic.in/DeHaat/form/HonestFarmPesticideCertificate/formperma/s0aK8FVXb0Kd8E6M-KE8u7Zg3CtEER5rISagIEpX9dA/htmlRecords/submit"
		                name="form"
		                method="POST"
		                acceptCharset="UTF-8"
		                encType="multipart/form-data"
		                id="form"
		              >
		                <input type="hidden" name="zf_referrer_name" defaultValue="" />
		                <input type="hidden" name="zf_redirect_url" defaultValue="" />
		                <input type="hidden" name="zc_gad" defaultValue="" />
		                <div className="form-row">
		                  <div className="col-12 col-md-4 mt-3">
		                    <input
		                      type="text"
		                      maxLength={255}
		                      name="Name_First"
		                      fieldtype={7}
		                      className="form-control"
		                      placeholder="First name"
		                      required
		                    />
		                  </div>
		                  <div className="col-12 col-md-4 mt-3">
		                    <input
		                      type="text"
		                      maxLength={255}
		                      name="Name_Last"
		                      fieldtype={7}
		                      className="form-control"
		                      placeholder="Last name"
		                      required
		                    />
		                  </div>
		                  <div className="col-12 col-md-4 mt-3">
		                    <input
		                      fieldtype={9}
		                      type="email"
		                      name="Email"
		                      className="form-control"
		                      checktype="c5"
		                      placeholder="Email"
		                      required
		                    />
		                  </div>
		                </div>
		                <div className="form-row">
		                  <div className="col-12 col-md-6 mt-3">
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
		                      required
		                    />
		                  </div>
		                  <div className="col-11 col-md-5 mt-3">
		                    <input
		                      type="text"
		                      className="form-control"
		                      name="SingleLine"
		                      placeholder="Batch No"
		                      required
		                    />
		                  </div>
		                  <div className="col-1 col-md-1 mt-3">
                            <button
							  type="button"
							  className="shadow-none border-none"
							  data-toggle="tooltip"
							  data-html="true"
							  title="Batch no.<br><img src=/static/assets/img/tooltip.jpeg width='150px'>"
							>
							  <i className="fa-solid fa-circle-info" />
							</button>
                          </div>
		                </div>
		                <button type="submit" className="btn btn-main2 mt-3 px-5">
		                  Submit
		                </button>
		              </form>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

	)
}