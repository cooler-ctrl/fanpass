
import './cardcss.css';

import React from 'react';

function CardContainer(){
  return (
      <>
    <div className="container mt-5">
      <div className="row justify-content-center g-5">
       
        <div className="col-md-4 ">
          <div className="custom-card-box position-relative">
            <div className="custom-card-content">
              <div className="title">Shitje</div>
              <div className="value">400,590</div>
              <div className="hot">HOT 🔥</div>
            </div>
            <img src="/img/messi 4.png" alt="Player 1" className="custom-img" />
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="custom-card-box position-relative">
            <div className="custom-card-content">
              <div className="title">Shikime</div>
              <div className="value">50,000</div>
            </div>
            <img src="/img/lebron-james 1.png" alt="Player 2" className="custom-img" />
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="custom-card-box position-relative">
            <div className="custom-card-content">
              <div className="title">Bileta</div>
              <div className="value">100,000</div>
            </div>
            <img src="/img/player2 1.png" alt="Player 3" className="custom-img" />
          </div>
        </div>
      </div>

      <h1 className="text-center mt-5 display-1 fw-bold">I PREFERUARI JUAJ?</h1>
    </div>
    </>
  );
};

export default CardContainer;
