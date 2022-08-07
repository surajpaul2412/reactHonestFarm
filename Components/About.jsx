import React from 'react'

export default function About() {
	return (
		<section className="about" id="about">
		  <div className="container pt-5">
		    <div className="row align-items-center">
		      <div className="col-lg-6 col-md-12 pt-5 d-none d-md-block">
		        <div className="about-img-discard">
		          <img
		            src="/static/assets/img/about.webp"
		            alt="about-honest-farm"
		            width="100%"
		            className="d-block mx-auto"
		          />
		        </div>
		      </div>
		      <div className="col-lg-6 col-md-12">
		        <div className="section-heading text-left about-info">
		          <h4 className="subheading">About Us</h4>
		          <span className="subtitle">About Us</span>
		          <h2>
		            Every morsel full<span> of goodness</span>
		          </h2>
		          <p className="text-black pt-4">
		            Welcome to the world of{" "}<span className="font-weight-bold">DeHaat Honest Farms</span>.<br /><br />
		            Every Honest Farms product is a result of direct collaboration between over a million farmers from all over the country, and DeHaat - India’s largest full-stack AgriTech platform, that came into existence for farmers. <br /><br />
		            At DeHaat, we understand the struggles of the Indian farmer. Not having easy access to basic infrastructural needs, struggling for accurate information on weather and technology, and not getting the right prices for their produce.<br /><br />
		            We believe that happy farmers means a happy produce. And so, we areon a mission to revolutionize Indian farming by offering:
		          </p>
		        </div>
		      </div>
		      <div className="col-lg-12 col-md-12 px-4 pt-0 pt-md-3">
		        <div id="accordian" className="collapse">
		          <ol className="text-dark font-weight-bold mb-3">
		            <li>
		              <i className="fa-solid fa-check text-success pr-3" /> High-quality
		              input products such as fertilizers, crop nutrients, seeds etc.
		            </li>
		            <li>
		              <i className="fa-solid fa-check text-success pr-3" /> Provide
		              access to mechanized farming via tools like drones and harvesters.
		            </li>
		            <li>
		              <i className="fa-solid fa-check text-success pr-3" /> Services
		              like customised crop & weather based advisory, soil analytics,
		              crop assessment, financing and crop insurance.
		            </li>
		            <li>
		              <i className="fa-solid fa-check text-success pr-3" /> Direct
		              market linkage at a price favourable to farmers.
		            </li>
		          </ol>
		          <p className="text-black">
		            This means that every pack of Honest Farms products comes from crops grown in the best conditions with the highest quality of raw materials. Our promise is to give you and your family nothing but products that are safe and of assured quality. That’s why we keep a check at every step of the way, right from procurement to processing. Once the produce is harvested, we carry out more than 230 quality checks to make sure every Honest Farms product is pesticide-free and of the highest quality.<br /><br /> We are proud to bring you honest produce from Honest Farms.
		            <a href="" data-toggle="modal" data-target="#video">{" "}Click here{" "}</a>
		            to witness the revolution we have started.
		          </p>
		        </div>
		        <button type="button" className="btn btn-main moreless-button d-block ml-auto read-more-less" data-toggle="collapse" data-target="#accordian">
		          Read More <i className="fa-solid fa-angle-down" />
		        </button>
		      </div>
		    </div>
		  </div>
		</section>
	)
}