import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const DropdownButton = ({ isLoggedIn, onLogout, mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        !document.getElementById('dropdown-menu')?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.right - 160 + window.scrollX,
      });
    }
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
    if (isLoggedIn) {
      onLogout();
    } else {
      navigate('/register');
    }
  };


  if (mobile) {
    return (
      <ul className="text-white text-sm px-4 py-2 w-full text-center">
        {isLoggedIn ? (
          <>
            <li className="py-2 border-b border-gray-700">Profili</li>
            <li className="py-2 border-b border-gray-700">Settings</li>
            <li className="py-2 cursor-pointer" onClick={onLogout}>
              Logout
            </li>
          </>
        ) : (
          <li className="py-2 cursor-pointer" onClick={() => navigate('/register')}>
            Sign up
          </li>
        )}
      </ul>
    );
  }
  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="profile"
        id="profileButton"
      >
        <img src="/img/profile-circle.png" alt="Profile" className="w-10 h-10 rounded-full" />
      </button>

      {isOpen &&
        createPortal(
          <div
            id="dropdown-menu"
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000,
            }}
            className="w-40 bg-black text-white rounded shadow-lg"
          >
            <ul className="py-1 list-unstyled text-sm">
              {isLoggedIn ? (
                <>
                  <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Profili</li>
                  <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Settings</li>
                  <li
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={handleClick}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={handleClick}
                >
                  Sign up
                </li>
              )}
            </ul>
          </div>,
          document.body
        )}
    </>
  );
};

export default DropdownButton;
