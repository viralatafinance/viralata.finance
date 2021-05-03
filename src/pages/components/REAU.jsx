import React, { Component } from "react";
import { IoIosArrowForward, IoMdPaw } from "react-icons/io";
import {
  IoMdWater,
  IoMdFlame,
  IoMdSync,
  IoIosLock,
  IoMdPaper,
} from "react-icons/io";
import { Translation } from "react-i18next";

const ArrowIcon = (props) => {
  return <IoIosArrowForward style={{ marginRight: 5, marginTop: -2 }} />;
};

class About extends Component {
  render() {
    const Features = [
      {
        icon: <IoMdWater />,
        title: <Translation>{(t) => t("Liquidez automática")}</Translation>,
        description: (
          <Translation>
            {(t) =>
              t(
                "3% de cada transação contribui para gerar automaticamente liquidez dentro do pool de liquidez da PancakeSwap."
              )
            }
          </Translation>
        ),
      },
      {
        icon: <IoMdFlame />,
        title: <Translation>{(t) => t("Mecanismo deflacionário")}</Translation>,
        description: (
          <Translation>
            {(t) =>
              t(
                "Aprox. 1% de cada transação é destinado a uma carteira morta (sem dono), retirando de circulação e aumentando a escassez de tokens."
              )
            }
          </Translation>
        ),
      },
      {
        icon: <IoMdSync />,
        title: <Translation>{(t) => t("Recompensas passivas")}</Translation>,
        description: (
          <div>
            <Translation>
              {(t) =>
                t(
                  "Os detentores do token (holders) ganham recompensas passivas através do sistema de reflexão do token."
                )
              }
            </Translation>
            <br />
            <Translation>
              {(t) =>
                t(
                 "2% de cada transação é distribuído para quem tem REAU na carteira (de preferência REAUPay), incluindo a carteira morta (mecanismo deflacionário)."
                )
              }
            </Translation>
          </div>
        ),
      },
      {
        icon: <IoIosLock />,
        title: <Translation>{(t) => t("Seguro")}</Translation>,
        description: (
          <Translation>
            {(t) =>
              t(
                "A liquidez inicial do contrato foi queimada junto com metade dos tokens. O que isso significa? O REAU sempre terá um valor mínimo."
              )
            }
          </Translation>
        ),
      },
    ];

    let title = (
      <div>
        REAU <span style={{ fontWeight: 300 }}>Token</span>
      </div>
    );
    let description = (
      <div>
        <Translation>
          {(t) =>
            t(
              "Vira-Lata Finance ($REAU) é um projeto de código aberto descentralizado, criado para incluir os Brasileiros ao mundo das criptomoedas, prover sistemas financeiros de maneira segura, de fácil uso e com ações destinadas à caridade."
            )
          }
        </Translation>
        <br />
      </div>
    );

    return (
      <Translation>
        {(t) => (
          <React.Fragment>
            <div className="about-wrapper">
              <div className="container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-12 col-md-12 pt--120">
                    <div className="about-inner inner">
                      <div className="section-title">
                        <h2 className="title">{title}</h2>
                        <p className="description">{description}</p>
                      </div>
                      <div className="row mt--30 mt_sm--10">
                        <div className="col-lg-12 col-md-12 ">
                          <div className="mb--30">
                            <h3 className="title">{t("Objetivos")}</h3>
                            <ul
                              style={{
                                color: "rgba(198, 201, 216, 0.75)",
                                fontSize: 18,
                                listStyle: "none",
                              }}
                            >
                              <li>
                                <ArrowIcon />
                                {t(
                                  "Encorajar e empoderar os Brasileiros a ter controle de suas finanças;"
                                )}
                              </li>
                              <li>
                                <ArrowIcon />
                                {t(
                                  "Demonstrar o potencial de soluções financeiras alternativas;"
                                )}
                              </li>
                              <li>
                                <ArrowIcon />
                                {t(
                                  "Ajudar a arrecadar fundos à instituições de caridade destinadas às ações de cuidados aos maus tratos animais;"
                                )}
                              </li>
                            </ul>
                          </div>
                          <h3 className="title">{t("Características")}</h3>
                          <div className="col-lg-12 col-12 mt_md--50">
                            <div className="row service-one-wrapper">
                              {Features.map((val, i) => (
                                <div
                                  className="col-lg-12 col-md-12 col-sm-12 col-12"
                                  key={i}
                                >
                                  <div className="service service__style--3">
                                    <div className="icon">{val.icon}</div>
                                    <div className="content">
                                      <h3 className="title">{val.title}</h3>
                                      <p>{val.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={t("WhitepaperLink")}
                                >
                                  <div
                                    className="service service__style--3"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div className="icon">
                                      <IoMdPaper />
                                    </div>
                                    <div className="content">
                                      <h3 className="title">
                                        Viralata Finance - Whitepaper
                                      </h3>
                                      <p>
                                        {t(
                                          "Clique aqui para baixar o documento técnico oficial de nosso token."
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={t("ReauPaperLink")}
                                >
                                  <div
                                    className="service service__style--3"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div className="icon">
                                      <IoMdPaw />
                                    </div>
                                    <div className="content">
                                      <h3 className="title">
                                        Viralata Finance - REAUPaper
                                      </h3>
                                      <p>
                                        {t(
                                          "Clique aqui para baixar o nosso documento destinado a iniciantes no mundo de criptomoedas e finanças descentralizadas."
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </Translation>
    );
  }
}
export default About;
