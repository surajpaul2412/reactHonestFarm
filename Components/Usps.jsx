import React from "react";
import Slider from "react-slick"

export default function Usps() {
	var settings = {
	    lazyLoad: 'onDemand',
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover:true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1
          }
        }
       ]
  };
  return (
  	<section className="feature pb-5" id="usp">
  		<div className="container py-4">
		    <div className="row justify-content-center">
		      <div className="col-lg-6">
		        <div className="section-heading">
		          <h4 className="subheading">USPs</h4>
		          <h2>
		            <span>Our Specialities</span>
		          </h2>
		        </div>
		      </div>
		    </div>

		    <div className="xs-center d-none d-md-block">
		      <div className="row">
		        <div className="col-lg-4 col-md-6 usps" align="center">
		          <img
		            src="/static/assets/img/Frame-6.webp"
		            alt="honest-farm-usps"
		            width="40%"
		            className="d-block mx-auto"
		          />
		          <h2 className="text-success pt-4">
		            End to end
		            <br />
		            traceability
		          </h2>
		        </div>
		        <div className="col-lg-4 col-md-6 usps" align="center">
		          <img
		            src="/static/assets/img/Frame-7.webp"
		            alt="honest-farm-usps"
		            width="40%"
		            className="d-block mx-auto"
		          />
		          <h2 className="text-success pt-4">
		            230+ quality
		            <br />
		            checks
		          </h2>
		        </div>
		        <div className="col-lg-4 col-md-6 usps" align="center">
		          <img
		            src="/static/assets/img/Frame-8.webp"
		            alt="honest-farm-usps"
		            width="40%"
		            className="d-block mx-auto"
		          />
		          <h2 className="text-success pt-4">
		            100% pesticide free
		            <br />
		            guarantee
		          </h2>
		        </div>
		      </div>
		    </div>

				<div className="d-block d-md-none">
			    <Slider className="container" {...settings}>
			    	<div className="element" align="center">
	            <div className="col-lg-4 col-md-6 usps" align="center">
	              <img
	                src="/static/assets/img/Frame-6.webp"
	                alt="honest-farm-usps"
	                width="40%"
	                className="d-block mx-auto"
	              />
	              <h2 className="text-success pt-4">
	                End to end
	                <br />
	                traceability
	              </h2>
	            </div>
	          </div>
	          <div className="element" align="center">
	            <div className="col-lg-4 col-md-6 usps" align="center">
	              <img
	                src="/static/assets/img/Frame-7.webp"
	                alt="honest-farm-usps"
	                width="40%"
	                className="d-block mx-auto"
	              />
	              <h2 className="text-success pt-4">
	                End to end
	                <br />
	                traceability
	              </h2>
	            </div>
	          </div>
	          <div className="element" align="center">
	            <div className="col-lg-4 col-md-6 usps" align="center">
	              <img
	                src="/static/assets/img/Frame-8.webp"
	                alt="honest-farm-usps"
	                width="40%"
	                className="d-block mx-auto"
	              />
	              <h2 className="text-success pt-4">
	                100% pesticide free
	                <br />
	                guarantee
	              </h2>
	            </div>
	          </div>
			    </Slider>
				</div>
			</div>
		</section>
  );
}