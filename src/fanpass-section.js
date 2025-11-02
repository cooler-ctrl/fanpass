import './style.css';

function FanpassSection(){
      return(
            <>
             <div className="fanpass-section" >
      <div className="intro">
        <div className="intro-text">
          <h2>Historia Jonë</h2>
        </div>
        <div className="intro-content">
          <img src="/img/stadium1.png" alt="Stadium" className="stadium-img" />
          <div className="text-block">
            <h2>Si nisi FanPass?</h2>
            <p>
          Faqja FanPass nisi fillimisht si një ide e thjeshtë pas një mungese të dukshme 
të platformave të sigurta dhe të lehta për të blerë bileta.
Duke parë mungesën e transparencës dhe vështirësitë me tregun
 e biletave,gjetëm iden e shkelqyer të cilen e quajtem FanPass platforma që lidh tifozët
 me ndeshjet që duan të ndjekin drejteperdrejte, duke ofruar bileta të sigurta dhe
përvoja të veqanta sportive.
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Pse FanPass është ndryshe?</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <div className="icon-box"></div>
            <div className="feature-text">
              <h3>100% e sigurt</h3>
              <p>Bileta të verifikuar</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="icon-box"></div>
            <div className="feature-text">
              <h3>Eco-Friendly</h3>
              <p>Pa printime, qr-code</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="icon-box"></div>
            <div className="feature-text">
              <h3>E shpejtë</h3>
              <p>Për më pak se 2min ke biletën në gjep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </>
);
};

export default FanpassSection;