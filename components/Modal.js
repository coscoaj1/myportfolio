import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-20 text-opacity-100 backdrop-filter backdrop-blur-xl z-50">
      <div className="flex flex-col items-center justify-center h-screen">
        <IoCloseOutline
          className="bg-white cursor-pointer rounded-full h-8 w-8"
          arial-label="Close modal"
          onClick={handleCloseClick}
        />
        <div className="w-[800px] h-[500px] rounded-3xl bg-white mx-0 my-auto"></div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
