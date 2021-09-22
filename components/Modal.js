import React, { useEffect } from "react";
import { ModalBtn } from './functionality';

function Modal() {
  useEffect(() => {
    ModalBtn();
  });

  return (
    <div>
      <div className="modal hidden">
        <button className="btn--close-modal">&times;</button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button className="btn">Next step &rarr;</button>
        </form>
      </div>
      <div className="overlay hidden"></div>
    </div>
  );
}

export default Modal;