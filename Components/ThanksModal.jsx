import {useState, useEffect} from "react"

export default function ThanksModal() {
	return (
      <div className="modal" id="thankyou" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg border-none" role="document">
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
                        <img src="/static/assets/img/thankyou.webp" alt="modal-thankyou" width="100%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	)
}