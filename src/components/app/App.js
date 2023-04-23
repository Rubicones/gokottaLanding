import "./App.css";
import textLogo from "../../img/gokottaDarkLogo.svg"
import transpBackground from '../../img/transpBackground.svg'
import headerPhoto from '../../img/headerPhoto.png'
import lightLogoBeans from '../../img/lightLogoBeans.svg'
import cphoto1 from '../../img/carouselPhotos/cphoto1.png'
import React, { useRef } from "react";

function App() {

  const menuSectionRef = useRef(null)
  
  const scrollToMenu = () => {
        menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });  
  }

  return (
    <>
    <div className="scroll-container">
      <header>
          <img src={transpBackground} className="transparent-background" alt=''/>
          <img src={headerPhoto} className="header-photo" alt=''/>
          <div className="header_container">
            <div className="header-items">
              <img src={textLogo} className="header-logo" alt=''/>
              <button className="menu-btn" onClick={scrollToMenu}>Menu</button>
            </div>
          </div>
        </header>
      <section className="menu-section">
        <img src={lightLogoBeans} className="logo-beans" alt=''/>
        <hr data-content="О нас"></hr>
        <div className="container">
          <span className="about_us">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae consequatur incidunt laborum minus velit, nisi temporibus atque! Tenetur consectetur reiciendis quibusdam minima cum accusantium. Omnis quidem recusandae quos expedita.
            Suscipit ipsum, aperiam qui animi quas laborum, provident asperiores deleniti cupiditate, obcaecati voluptates explicabo adipisci sit. Placeat odit numquam tempora quos aperiam et quasi ad, voluptatem odio doloribus, magnam fugiat?
          </span>

          <div className="carousel">
            <img src={cphoto1} alt=''/>
          </div>
        </div>
      </section>

      <section className="menu-section" ref={menuSectionRef}>
        <img src={lightLogoBeans} className="logo-beans" alt=''/>
        <hr data-content="Meню" ></hr>

      </section>
    </div>
      
    </>
  );
}

export default App;
