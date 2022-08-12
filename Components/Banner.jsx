import React from 'react'

export default function Banner() {
	return (
		<section className="banner">
			<div id="bannerSlider" className="carousel slide pt-5" data-ride="carousel">
			  <ul className="carousel-indicators">
			    <li data-target="#bannerSlider" data-slide-to={0} className="active" />
			    <li data-target="#bannerSlider" data-slide-to={1} />
			  </ul>
			  {/* The slideshow */}
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			    	<picture>
	                    <source srcSet="/static/assets/img/banner2.webp" type="image/webp" />
	                    <img className="pt-4 d-none d-md-block" src="/static/assets/img/banner2.webp" alt="honest-farm-banner" width="100%" />
	                </picture>
	                <picture>
	                    <source srcSet="/static/assets/img/mob-banner2.webp" type="image/webp" />
	                    <img className="pt-3 d-block d-md-none" src="/static/assets/img/mob-banner2.webp" alt="honest-farm-banner" width="100%" />
	                </picture>
			    </div>
			    <div className="carousel-item">
			    	<picture>
	                    <source srcSet="/static/assets/img/banner.webp" type="image/webp" />
	                    <img className="pt-4 d-none d-md-block" src="/static/assets/img/banner.webp" alt="honest-farm-banner" width="100%" />
	                </picture>
	                <picture>
	                    <source srcSet="/static/assets/img/mob-banner2.webp" type="image/webp" />
	                    <img className="pt-3 d-block d-md-none" src="/static/assets/img/mob-banner2.webp" alt="honest-farm-banner" width="100%" />
	                </picture>
			    </div>
			  </div>
			  {/* Left and right controls */}
			  <a className="carousel-control-prev" href="#bannerSlider" data-slide="prev">
			    <span className="carousel-control-prev-icon" />
			  </a>
			  <a className="carousel-control-next" href="#bannerSlider" data-slide="next">
			    <span className="carousel-control-next-icon" />
			  </a>
			</div>
		</section>
	)
}