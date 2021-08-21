import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { IoMdGlobe } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import Modal from "react-modal";
import { Translation } from "react-i18next";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
    this.state = {
      modalOpen: false,
    };
  }

  changeES = (event) => {
    this.props.i18n.changeLanguage("es");
  };

  changePT = (event) => {
    this.props.i18n.changeLanguage("ptBR");
  };

  changeEN = (event) => {
    this.props.i18n.changeLanguage("en");
  };

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement.querySelector(".submenu").classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { color = "default-color", hideLogo = false } = this.props;
    let logoUrl = <img src="/assets/images/logo/logo.png" alt="Vira-lata Finance" className="header-logo" />;

    return (
      <Translation>
        {(t) => (
          <>
            <Modal isOpen={this.state.modalOpen} onRequestClose={() => this.closeModal()} style={customStyles} contentLabel="">
              <div className="modal-buy">
                <div className="container position-relative" style={{ maxWidth: 800 }}>
                  <div className="service-wrapper service-white">
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 col">
                        <a target="_blank" rel="noopener noreferrer" href={t("ViralataHelp")}>
                          <div className="service service__style--1">
                            <div className="icon">
                              <img style={{ width: 60, height: 60 }} src={`/assets/images/icons/help.svg`} alt="Viralata Finance" />
                            </div>
                            <div className="content">
                              <h4 className="title">{t("Sou novo")}</h4>
                              <p>{t("Se você está iniciando no mundo das finanças descentralizadas, clique aqui.")}</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 col">
                        <a target="_blank" rel="noopener noreferrer" href="https://exchange.viralata.finance">
                          <div className="service service__style--1">
                            <div className="icon">
                              <img style={{ width: 60, height: 60 }} src={`/assets/images/icons/sunglasses.svg`} alt="Viralata Finance" />
                            </div>
                            <div className="content">
                              <h4 className="title">{t("Sou experiente")}</h4>
                              <p>{t("Ir para o site da PancakeSwap para comprar REAU")}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span
                      style={{
                        color: "#555",
                        textAlign: "center",
                        display: "block",
                        marginTop: "10px",
                      }}
                    >
                      {t("REAU é um investimento volátil e de alto risco. Não arrisque nada que você não esteja disposto a perder.")}
                    </span>
                  </div>
                </div>
              </div>
            </Modal>
            <header className={`header-area formobile-menu header--transparent ${color}`}>
              <div className="header-wrapper" id="header-wrapper">
                <div className="header-left">
                  <div className="logo">{!hideLogo && <a href="/">{logoUrl}</a>}</div>
                </div>
                <div className="header-right">
                  <nav className="mainmenunav d-lg-block">
                    <ul className="mainmenu">
                      <li>
                        <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href="https://app.viralata.finance">
                          {t("ViralataSwap")}                         
                        </a>
                      </li>
                      <li>
                        <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href="https://docs.viralata.finance">
                          {t("Docs")}                         
                        </a>
                      </li>
                      <li>
                        <HashLink smooth to="#charity-fund" onClick={this.CLoseMenuTrigger}>
                          {t("Fundo de caridade")}                       
                        </HashLink>
                      </li>                     
                      <li>
                        <HashLink smooth to="#roadmap" onClick={this.CLoseMenuTrigger}>
                          {t("Planejamento")}
                        </HashLink>
                      </li>
                      <li className="has-droupdown">
                        <Link to="#">{t("Siga-nos")}</Link>
                        <ul className="submenu">
                          <li>
                            <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href={t("Telegram")}>
                              Telegram
                            </a>
                          </li>
                          <li>
                            <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/br.viralata.finance">
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/viralatafinance">
                              Instagram
                            </a>
                          </li>
                          <li>
                            <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/viralatafinance">
                              Twitter
                            </a>
                          </li>
                          <li>
                            <a onClick={this.CLoseMenuTrigger} target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/viralatafinance">
                              Reddit
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-droupdown">
                        <Link to="#">
                          <IoMdGlobe />
                        </Link>
                        <ul className="submenu">
                          <li>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                this.CLoseMenuTrigger();
                                this.changeEN();
                              }}
                              href="/"
                            >
                              English
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                this.CLoseMenuTrigger();
                                this.changePT();
                              }}
                              href="/"
                            >
                              Português
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                this.CLoseMenuTrigger();
                                this.changeES();
                              }}
                              href="/"
                            >
                              Spanish
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-btn">
                    <a
                      className="btn-solid-inverted rn-button-style--2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        this.openModal();
                      }}
                      href="/"
                    >
                      <span>{t("COMPRAR REAU")}</span>
                    </a>
                  </div>
                  {/* Start Humberger Menu  */}
                  <div className="humberger-menu d-block d-lg-none pl--20">
                    <span onClick={this.menuTrigger} className="menutrigger text-white">
                      <FiMenu />
                    </span>
                  </div>
                  {/* End Humberger Menu  */}
                  <div className="close-menu d-block d-lg-none">
                    <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                      <FiX />
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </>
        )}
      </Translation>
    );
  }
}
export default Header;
