import React from "react";
import Slider from "react-slick";

export default function Video() {
  var settings = {
    lazyLoad: "onDemand",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="service section-padding secondary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2 className="text-capitalize">
                Witness our journey, from farm to plate
              </h2>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="img-wrapper">
                <a href="" data-toggle="modal" data-target="#video">
                  <picture>
                    <source
                      srcSet="/static/assets/img/thumbnail1.webp"
                      type="image/webp"
                    />
                    <img
                      className="inner-img w-100"
                      src="/static/assets/img/thumbnail1.png"
                      alt="honest-farm-thumbnail"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="img-wrapper">
                <a href="" data-toggle="modal" data-target="#video2">
                  <picture>
                    <source
                      srcSet="/static/assets/img/thumbnail2.webp"
                      type="image/webp"
                    />
                    <img
                      className="inner-img w-100"
                      src="/static/assets/img/thumbnail2.png"
                      alt="honest-farm-thumbnail"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <Slider className="" {...settings}>
            <a href="" data-toggle="modal" data-target="#video">
              <div className="element" align="center">
                <div className="img-wrapper">
                  <picture>
                    <source
                      srcSet="/static/assets/img/thumbnail1.webp"
                      type="image/webp"
                    />
                    <img
                      className="inner-img w-100"
                      src="/static/assets/img/thumbnail1.png"
                      alt="honest-farm-thumbnail"
                    />
                  </picture>
                </div>
              </div>
            </a>
            <a href="" data-toggle="modal" data-target="#video2">
              <div className="element" align="center">
                <div className="img-wrapper">
                  <picture>
                    <source
                      srcSet="/static/assets/img/thumbnail2.webp"
                      type="image/webp"
                    />
                    <img
                      className="inner-img w-100"
                      src="/static/assets/img/thumbnail2.png"
                      alt="honest-farm-thumbnail"
                    />
                  </picture>
                </div>
              </div>
            </a>
          </Slider>
        </div>
      </div>
    </section>
  );
}
