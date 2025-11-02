import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function HeroSection() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/events?search=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
   <>
 <section className="hero d-flex align-items-center justify-content-center">
  <div className="container hero-layout text-center">
    
 
    <div className="ball-container mb-3">
      <img src="/img/ballimg.png" className="ball img-fluid" alt="Soccer Ball" />
    </div>

  
    <div className="row justify-content-center">
      <div className="col-10">
        <img src="/img/1 3.png" className="seats top img-fluid" alt="Top Seats" />
      </div>
    </div>

    <div className="row ">
 
      <div className="col-auto">
        <img src="/img/1 4.png" className="seats left img-fluid" alt="Left Seats" />
      </div>

    
      <div className="col d-flex justify-content-center">
        <div className="hero-content text-white">
          <h1>Mos e humb <br /><span>Momentin.</span></h1>
          <p>
            Siguro biletat për ndeshjet e tua të preferuara futboll,<br />
            basketboll dhe më shumë. Mos humb asnjë moment emocioni!
          </p>
          <div className="search-box">
            <input
              type="text"
              placeholder="game search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>
              <img src="/img/searchicon.svg" alt="Search" />
            </button>
          </div>
        </div>
      </div>


      <div className="col-auto">
        <img src="/img/1 2.png" className="seats right img-fluid" alt="Right Seats" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-10">
        <img src="/img/1 1.png" className="seats bottom img-fluid" alt="Bottom Seats" />
      </div>
    </div>
  </div>
</section>

   </>
  );
}

export default HeroSection;
