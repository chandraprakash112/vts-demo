import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingBtn(){
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Position state (vertical only)
  const [posY, setPosY] = useState(500);
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef(0);

  // Handle Dragging Logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Calculate where inside the button the user clicked
    offsetRef.current = e.clientY - posY;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      // Calculate new position and add constraints (keep on screen)
      let newY = e.clientY - offsetRef.current;
      const minToggleHeight = 50;
      const maxToggleHeight = window.innerHeight - 100;

      if (newY < minToggleHeight) newY = minToggleHeight;
      if (newY > maxToggleHeight) newY = maxToggleHeight;

      setPosY(newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="fixed right-0 z-[1000] flex items-center transition-transform duration-300 ease-in-out"
      style={{
        top: `${posY}px`,
        transform: isOpen ? 'translateX(0px)' : 'translateX(165px)',
      }}
      onMouseEnter={() => !isDragging && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Drag Handle & Arrow */}
      <div
        onMouseDown={handleMouseDown}
        className={`flex items-center justify-center rounded-l-xl shadow-lg cursor-grab active:cursor-grabbing transition-colors ${
          isOpen ? 'bg-blue-700' : 'bg-blue-500'
        }`}
      >
        <span className='flex items-center justify-center w-8'>
          <ChevronLeft
            size={20}
            className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>

        {/* Button Content */}
        <button
          type="button"
          // onClick={() => navigate('/')}
          className="flex items-center gap-2 p-3 bg-white shadow-xl text-blue-700 font-bold text-sm whitespace-nowrap hover:bg-slate-50 active:scale-95 transition-all"
        >
          <Calendar size={18} />
          Floating Button
        </button>
      </div>
    </div>
  );
};
