import "./Menu.css";
import React, { useRef } from "react";
import lightLogoBeans from "../../img/lightLogoBeans.svg";
import menuFull from "../../img/menu_full.png";


const Menu = () => {
    return (
        <section className="menu screen">
            <img src={lightLogoBeans} className="logo-beans" alt="" />
            <div className="menu-container">
                <div className="menu-heading-cont">
                    <hr data-content="Meню"></hr>
                </div>
                {/* <div className="containerScreen">
                              <div className="switcherCont">
                                <Switcher onSwitch={(state) => setSwitcher(state)}/>
                              </div>
                            </div> */}
                <img src={menuFull} className="menuImg" alt="" />
                <a
                    href={menuFull}
                    download="gokötta-menu"
                    className="download-menu-btn"
                >
                    Скачать меню
                </a>
            </div>
        </section>
    );
};

export default Menu;
