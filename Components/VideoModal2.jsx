import {useState, useEffect} from "react"

export default function VideoModal2() {
return (
  <>
    <div className="modal fade" id="video2" tabIndex={-1} role="dialog" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered modal-lg border-none" style={{ borderRadius: 0 }} role="document" >
            <div className="modal-content bg-white p-0">
                <div className="modal-header py-2">
                    <div className="d-block ml-auto">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
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
                                            src="https://www.youtube.com/embed/cz_4MYGb9mo?autoplay=0"
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
)}
