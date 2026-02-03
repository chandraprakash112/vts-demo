import { Box, Package } from 'lucide-react';
import React from 'react';

export default function Modal({ show, onClose, modalData }) {
  if (!show) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '10px',
  };

  return (
    <div style={overlayStyle}>
      <div style={{ position: 'relative' }}>
        <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow">
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-300 hover:text-black cursor-pointer z-10"
            onClick={onClose}
          >
            ✕
          </button>
          {modalData}
        </div>
      </div>
    </div>
  );
}
