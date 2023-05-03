import "./App.css";
import textLogo from "../../img/gokottaDarkLogo.svg";
import transpBackground from "../../img/transpBackground.svg";
import headerPhoto from "../../img/headerPhoto.png";
import lightLogoBeans from "../../img/lightLogoBeans.svg";
import menuFull from "../../img/menu_full.png";
import React, { useRef } from "react";
import Menu from "../menu/Menu";
import cphoto1 from '../../img/carouselPhotos/cphoto1.png'



function App() {
    // const menuSectionRef = useRef(null);
    // const [switcher, setSwitcher] = useState("2");

    // const scrollToMenu = () => {
    //     menuSectionRef.current.scrollIntoView({ behavior: "smooth" });
    // };

    const x = window.matchMedia("(max-width: 1400px)");
    if (x.matches) {
        console.log(1);
    }

    return (
        <>
            <div className="scroll-container">
                <header>
                    <img
                        src={transpBackground}
                        className="transparent-background"
                        alt=""
                    />
                    <img src={headerPhoto} className="header-photo" alt="" />
                    <div className="header_container">
                        <div className="header-items">
                            <img
                                src={textLogo}
                                className="header-logo"
                                alt=""
                            />
                            <button className="menu-btn">Menu</button>
                        </div>
                    </div>
                </header>

                <section className="about-us screen">
                    <img src={lightLogoBeans} className="logo-beans" alt=''/>
                    <hr data-content="О нас"></hr>
                    <div className="containerScreen">
                        <span className="about_us">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores quae consequatur incidunt laborum
                            minus velit, nisi temporibus atque! Tenetur
                            consectetur reiciendis quibusdam minima cum
                            accusantium. Omnis quidem recusandae quos expedita.
                            Suscipit ipsum, aperiam qui animi quas laborum,
                            provident asperiores deleniti cupiditate, obcaecati
                            voluptates explicabo adipisci sit. Placeat odit
                            numquam tempora quos aperiam et quasi ad, voluptatem
                            odio doloribus, magnam fugiat? Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Sed deleniti
                            assumenda ea sunt iste ipsa nemo exercitationem
                            neque vitae corporis atque omnis ducimus tempore,
                            cupiditate libero, laboriosam, unde itaque fuga.
                            Ipsam nesciunt, debitis voluptates consequatur
                            expedita ipsa aspernatur quibusdam inventore
                        </span>

                        <div className="carousel">
                              <img src={cphoto1} alt=''/>
                            </div>
                    </div>
                </section>

                <Menu />
            </div>
        </>
    );
}

export default App;
