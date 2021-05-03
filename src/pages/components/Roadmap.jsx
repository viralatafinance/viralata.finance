import React, { Component } from "react";
import { IoIosPaw, IoIosArrowForward, IoMdCheckmark } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Translation } from "react-i18next";

const TimelineElement = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        color: "#fff",
        fontSize: 24,
        marginBottom: 50,
      }}
      contentArrowStyle={{ display: "none" }}
      date={<span style={{ textTransform: "uppercase" }}>{props.title}</span>}
      iconStyle={{ background: "#000", color: "#4bf2cd" }}
      icon={props.icon}
    >
      {props.children}
    </VerticalTimelineElement>
  );
};

const ArrowIcon = (props) => {
  return <IoIosArrowForward style={{ marginRight: 5, marginTop: -2 }} />;
};

const CheckIcon = (props) => {
  return (
    <IoMdCheckmark
      className="theme-color"
      style={{ marginRight: 5, marginTop: -2 }}
    />
  );
};

class Roadmap extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <React.Fragment>
            <div className="portfolio-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="section-title"
                    style={{ textAlign: "center", marginBottom: 60 }}
                  >
                    <h2>{t("Planejamento")}</h2>
                  </div>
                </div>
                <VerticalTimeline className="vertical-timeline-dark">
                  <TimelineElement
                    title={t("1º Trimestre - 2021")}
                    icon={<IoIosPaw />}
                  >
                    <div>
                      <div className="service service__style--4">
                        <div className="content">
                          <h3 className="title">
                            {t("Quem soltou os cachorros?")}
                          </h3>
                          <p>
                            <span>
                              <CheckIcon />
                              {t("Lançamento justo do $REAU")}
                            </span>
                            <br />
                            <span>
                              <CheckIcon />
                              {t(
                                "Início das primeiras campanhas de divulgação"
                              )}
                            </span>
                            <br />
                            <span>
                              <CheckIcon />
                              {t(
                                "Primeiro contato com ONGs para iniciar esforços de arrecadação de fundos de caridade"
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TimelineElement>
                  <TimelineElement
                    title={t("2º Trimestre - 2021")}
                    icon={<IoIosPaw />}
                  >
                    <div>
                      <div className="service service__style--4">
                        <div className="content">
                          <h3 className="title">{t("Dominando as ruas")}</h3>
                          <p>
                            <span>
                              <CheckIcon />
                              {t("Primeira listagem em uma corretora.")}
                            </span>
                            <br />
                            <span>
                              <CheckIcon />
                              {t("Novo site da Vira-Lata Finance e REAUPay")}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t("Auditoria(s) completas")}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t(
                                "Listagem em rankings de moedas (CMC, CG e etc)"
                              )}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t(
                                "REAUPay v1 é lançado como uma maneira fácil de enviar e receber tokens, visualizar saldo e tokens ganhos, assim como carteira de fundos"
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TimelineElement>
                  <TimelineElement
                    title={t("3º Trimestre - 2021")}
                    icon={<IoIosPaw />}
                  >
                    <div>
                      <div className="service service__style--4">
                        <div className="content">
                          <h3 className="title">{t("Chegando na Lua")}</h3>
                          <p>
                            <span>
                              <ArrowIcon />
                              {t(
                                "Parcerias com vendedores para mercados de NFT"
                              )}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t(
                                "Lançamento do marketplace de NFTs com mercadorias de edição limitada da Vira-Lata Finance"
                              )}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t(
                                "Parcerias com redes de suprimentos para pets, para distribuição de materiais para ONGs"
                              )}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t(
                                "Novas funcionalidades ao REAUPay como Stacking para caridades, Rampa de acesso e saída para FIAT (reais e outras) e DEX própria"
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TimelineElement>
                  <TimelineElement
                    title={t("4º Trimestre - 2021")}
                    icon={<IoIosPaw />}
                  >
                    <div>
                      <div className="service service__style--4">
                        <div className="content">
                          <h3 className="title">{t("Ao infinito e além!")}</h3>
                          <p>
                            <span>
                              <ArrowIcon />
                              {t("Lançamento da governança")}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t("Lançamento da loteria $REAU")}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t("Expansão do time em 30%")}
                            </span>
                            <br />
                            <span>
                              <ArrowIcon />
                              {t(
                                "Lançamento do 1o jogo Vira-Lata Finance com uso do $REAU como moeda virtual"
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          </React.Fragment>
        )}
      </Translation>
    );
  }
}
export default Roadmap;
