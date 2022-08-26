import {useState, useEffect} from "react"

export default function VideoModal() {
	return (
		<>
		<div
      className="modal fade"
      id="video"
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
            <h4 className="heading text-black text-capitalize font-weight-600 ml-auto pt-1">
              Welcome to the Honest Farm !
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
                <img className="close-modal" src="/static/assets/img/close-button.png" alt="modal-close" style={{ width: 35 }} />
              </picture>
            </button>
          </div>
          <div className="modal-body p-0">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="card">
                  <div className="row media-px-1">
                    <div className="col-md-12 col-12">
                      {/* video */}
                      <iframe
                        id="youtube_player"
                        className="yt_player_iframe"
                        width="100%"
                        height={400}
                        src="https://www.youtube.com/embed/Hp7O8G9E9Fk?autoplay=0"
                        title="DeHaat: Transforming the way India Farms!!"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
		</>
	)
}
