import React from "react";
import ReactDOM from "react-dom";
import "./PendingModal.scss";

function PendingModal({ children }) {
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
          <button>X</button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            // onClick={() => {
            //   setOpenModal(false);
            // }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}
        {children}
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
}

export default PendingModal;
