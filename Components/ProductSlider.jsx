import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
	    dots: false,
	    infinite: true,
	    speed: 1500,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    centerMode: true,
	    autoplay: true,
	    arrows: true,
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

	  const myArray = [
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0000_DeHaat_FOP_Unpolished_Urad_Whole_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0001_DeHaat_FOP_Unpolished_Urad_Kali_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0002_DeHaat_FOP_Unpolished_Urad_Dal_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0003_DeHaat_FOP_Unpolished_Urad_Chilka_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0004_DeHaat_FOP_Unpolished_Toor_Dal_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0005_DeHaat_FOP_Unpolished_Rajma_Kashmiri_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0015_DeHaat_FOP_Raw_Peanuts_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0012_DeHaat_FOP_Unpolished_Chana_Dal_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0014_DeHaat_FOP_Rozana_Basmati_Rice_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0013_DeHaat_FOP_Sona_Masuri_Rice_White_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0011_DeHaat_FOP_Unpolished_Green_Moong_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0006_DeHaat_FOP_Unpolished_Rajma_Chitra_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0007_DeHaat_FOP_Unpolished_Moong_Dal_Chilka_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0008_DeHaat_FOP_Unpolished_Moong_Dal_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0009_DeHaat_FOP_Unpolished_Kala_Chana_1kg_260722.webp'},
			{'img':'/static/assets/img/products/HONESR-FARMS-PRODUCTS_0010_DeHaat_FOP_Unpolished_Kabuli_Chana_1kg_260722.webp'},
			{'img':'/static/assets/img/products/Dehaat-Biryani-premium-rice-Mockup.webp'}
		];

    return (
    	<section className="product section-padding overflow-x-hidden pb-5" id="product">
	      <div className="no-container">
	        <div className="row justify-content-center">
	            <div className="col-lg-6">
	                <div className="section-heading">
	                    <h4 className="subheading">Products</h4>
	                    <h2>Our Products</h2>
	                </div>
	            </div>
	        </div>
	        <Slider ref={c => (this.slider = c)} className="slick-slider" {...settings}>
			      {myArray.map((name,index) => (
			      	<div className="element p-4" key="{index}">
							  <div className="wrapper">
							    <div className="parent" data-toggle="modal" data-target={`#modal-fullscreen-xl${index+1}`}>
							      <div className={`bg${index+1}`} id="child">
							        <a className="btn-open-modal click-btn pointer">
							          <picture>
					                <source srcSet="/static/assets/img/plus.webp" type="image/webp" />
					                <img src="/static/assets/img/plus.png" alt="honest-farm-modal" style={{ filter: "invert(1)" }} />
					              </picture>
							        </a>
							      </div>
							    </div>
							  </div>
							</div>
		        ))}
			    </Slider>
	        <div className="py-4" align="center">
	          <button className="btn btn-main2 mx-3 media-w-50" onClick={this.previous}>
	            <i className="fa-solid fa-arrow-left-long pl-0 pr-3"></i> Previous
	          </button>
	          <button className="btn btn-main2 mx-3 media-w-50" onClick={this.next}>
	            Next <i className="fa-solid fa-arrow-right-long"></i>
	          </button>
	        </div>
	      </div>
	    </section>
    );
  }
}
