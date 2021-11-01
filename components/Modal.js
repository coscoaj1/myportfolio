import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

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
		<div className="w-[800px] h-[500px] z-50 border-2 absolute top-1/2 left-48 border-gray-700 bg-white">
			<a href="#" onClick={handleCloseClick}>
				x
			</a>
		</div>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
}

export default Modal;
