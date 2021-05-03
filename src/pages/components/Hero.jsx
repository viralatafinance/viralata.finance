import React, { Component } from "react";
import TextLoop from "react-text-loop";
import { Translation } from "react-i18next";

class Hero extends Component {
  render() {
    const terms = [
      <span>
        <Translation>
          {(t, i18n) =>
            i18n.lng === "en" ? (
              t("descentralizados")
            ) : (
              <>
                {t("descentralizados")}
                <br />
                <span>&nbsp;&nbsp;</span>
              </>
            )
          }
        </Translation>
      </span>,
      <span>
        <Translation>
          {(t, i18n) =>
            i18n.lng === "en" ? (
              <>{t("melhores")}</>
            ) : (
              <>
                {t("melhores")}
                <br />
                <span>&nbsp;&nbsp;</span>
              </>
            )
          }
        </Translation>
      </span>,
      <span>
        <Translation>
          {(t, i18n) =>
            i18n.lng === "en" ? (
              <>{t("mais seguros")}</>
            ) : (
              <>
                {t("mais seguros")}
                <br />
                <span>&nbsp;&nbsp;</span>
              </>
            )
          }
        </Translation>
      </span>,
      <span>
        <Translation>
          {(t, i18n) =>
            i18n.lng === "en" ? (
              <>{t("charity friendly")}</>
            ) : (
              <>
                {t("voltados para")}
                <br />
                {t("caridade")}
              </>
            )
          }
        </Translation>
      </span>,
    ];

    const ServiceList = [
      {
        icon: "coin",
        title: "REAU Token",
        section: "reautoken",
        description: (
          <span>
            <span className="theme-color" style={{ marginRight: 5 }}>
              REAU
            </span>
            <Translation>
              {(t) =>
                t(
                  "é um token descentralizado com uma economia deflacionária, introduzindo os Brasileiros ao mundo das criptomoedas."
                )
              }
            </Translation>
          </span>
        ),
      },
      {
        icon: "mobile",
        title: "REAUPay",
        section: "reaupay",
        description: (
          <span>
            <span className="theme-color" style={{ marginRight: 5 }}>
              REAUPay{" "}
            </span>
            <Translation>
              {(t) =>
                t(
                  `é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.`
                )
              }
            </Translation>
          </span>
        ),
      },
      {
        icon: "road",
        title: "Viralata Finance",
        section: "roadmap",
        description: (
          <span>
            <Translation>
              {(t) =>
                t(
                  "Nosso planejamento inclui um inovador mercado para NFT, poupança com incentivos à caridade, governança da comunidade, e mais."
                )
              }
            </Translation>{" "}
            <a className="theme-color" href="#roadmap">
              <Translation>{(t) => t("Confira!")}</Translation>
            </a>
          </span>
        ),
      },
    ];

    return (
      <Translation>
        {(t, i18next) => (
          <div className="slider-activation">
            <div
              className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
              data-black-overlay="6"
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner">
                      <img
                        src="/assets/images/logo/logo.png"
                        alt="Vira-lata Finance"
                        className="hero-logo"
                      />
                      <h1 className="title hero-title">
                        {i18next.lng === "en" ? (
                          <>
                            {t("CRIANDO")}
                            <br />
                            <TextLoop>
                              {terms.map((term) => (
                                <span
                                  className="theme-color"
                                  stlye={{ maxWidth: "100%" }}
                                >
                                  {term}
                                </span>
                              ))}
                            </TextLoop>
                            <br />
                            {t("SISTEMAS FINANCEIROS")}
                          </>
                        ) : (
                          <>
                            {t("CRIANDO")}
                            <br />
                            {t("SISTEMAS FINANCEIROS")}
                            <br />
                            <TextLoop>
                              {terms.map((term) => (
                                <span
                                  className="theme-color"
                                  stlye={{ maxWidth: "100%" }}
                                >
                                  {term}
                                </span>
                              ))}
                            </TextLoop>
                          </>
                        )}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="service-wrapper service-white">
                  <div className="row">
                    {ServiceList.map((val, i) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        key={i}
                      >
                        <div className="service service__style--1">
                          <div className="icon">
                            <img
                              style={{ width: 60, height: 60 }}
                              src={`/assets/images/icons/icon-${val.icon}.png`}
                              alt="Viralata Finance"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">{val.title}</h4>
                            <p>{val.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stats-box"></div>
              </div>
            </div>
          </div>
        )}
      </Translation>
    );
  }
}
export default Hero;
