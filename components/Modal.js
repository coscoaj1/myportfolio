import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import VideoPlayer from "./VideoPlayer";

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
      <div className="flex flex-col items-center justify-center h-screen my-auto">
        <IoCloseOutline
          className="bg-white cursor-pointer rounded-full h-8 w-8 mb-8"
          arial-label="Close modal"
          onClick={handleCloseClick}
        />
        <div className="flex items-center justify-center sm:w-[800px] sm:h-[500px] w-96 h-72 rounded-3xl bg-white mx-0">
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
