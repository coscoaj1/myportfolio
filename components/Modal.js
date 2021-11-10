import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import VideoPlayer from "./VideoPlayer";
import React, { useState, useEffect } from "react";

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
    <div className="fixed top-0 left-0 z-50 w-full h-full text-opacity-100 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl">
      <div className="flex flex-col items-center justify-center h-screen my-auto">
        <IoCloseOutline
          className="w-8 h-8 mb-8 bg-white rounded-full cursor-pointer"
          arial-label="Close modal"
          onClick={handleCloseClick}
        />
        <div className="flex items-center justify-center sm:w-[800px] sm:h-[450px] w-96 h-72  bg-[#141414] mx-0">
          <VideoPlayer videoId="2021-11-01_16-33-54_sk2kaa" />
        </div>
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
