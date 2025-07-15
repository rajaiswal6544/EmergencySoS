import React from 'react';

const SOSButton = ({ location }) => {
  const handleClick = () => {
    if (!location) return alert('Location not available');
    alert(`📍 Location sent!\nLat: ${location.lat}, Lng: ${location.lng}`);
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <button
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition"
      >
        🚨 Send SOS Now
      </button>
    </div>
  );
};

export default SOSButton;
