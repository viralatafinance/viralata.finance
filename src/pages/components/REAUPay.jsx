import React, { Component } from "react";
import { IoIosPaw, IoIosSwap, IoIosWallet, IoMdSchool } from "react-icons/io";
import { Translation } from "react-i18next";

const ServiceList = [
  {
    icon: <IoIosPaw />,
    title: <Translation>{(t) => t("Amigável")}</Translation>,
    description: (
      <div>
        <Translation>{(t) => t("A carteira amiga do homem.")}</Translation>
        <br /> <br />
        <Translation>
          {(t) =>
            t(
              "Sem burocracias, sem termos técnicos, sem configurações, baixou, usou."
            )
          }
        </Translation>
      </div>
    ),
  },
  {
    icon: <IoIosWallet />,
    title: <Translation>{(t) => t("Seus rendimentos")}</Translation>,
    description: (
      <div>
        <Translation>
          {(t) => t("Confira de maneira fácil seu saldo e seus rendimentos.")}
        </Translation>
        <br />
        <Translation>
          {(t) =>
            t(
              "Você pode destinar parte de seus rendimentos à instituições de caridade."
            )
          }
        </Translation>
      </div>
    ),
  },
  {
    icon: <IoIosSwap />,
    title: <Translation>{(t) => t("Envie e Receba")}</Translation>,
    description: (
      <div>
        <Translation>
          {(t) =>
            t(
              "Envie e receba REAU de um jeito fácil, calculando o valor na sua moeda nativa."
            )
          }
        </Translation>
        <br />
        <span className="theme-color">
          <Translation>{(t) => t("Você é um comerciante?")}</Translation>{" "}
        </span>
        <Translation>
          {(t) =>
            t(
              "Você pode começar a receber em REAU a hora que quiser. Sem cadastros, sem taxas ocultas."
            )
          }
        </Translation>
      </div>
    ),
  },

  {
    icon: <IoMdSchool />,
    title: <Translation>{(t) => t("Centro EducacionAU")}</Translation>,
    description: (
      <Translation>
        {(t) =>
          t(
            "Tenha acesso a conteúdos localizados, orientados a educar e ajudar aqueles que querem entender como funcionam os conceitos únicos das criptomoedas e das finanças descentralizadas."
          )
        }
      </Translation>
    ),
  },
];

class REAUPay extends Component {
  render() {
    let title = "REAUPay",
      description = (
        <Translation>
          {(t) =>
            t(
              'REAUPay é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.'
            )
          }
        </Translation>
      );

    return (
      <Translation>
        {(t) => (
          <React.Fragment>
            <div className="row">
              <div className="col-lg-4 col-12 ">
                <div className="section-title mt--30 mb--20 mt_md--5 mt_mobile--5 mb_mobile--10">
                  <h2 className="title">{title}</h2>
                  <p>{description}</p>
                  <div className="service-btn">
                    <a className="btn-transparent rn-btn-dark" href="/#reaupay">
                      <span className="text">
                        {t("Em breve disponível para Android e iOS.")}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-12 mt_md--50">
                <div className="row service-one-wrapper">
                  {ServiceList.map((val, i) => (
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                      <div className="service service__style--2">
                        <div className="icon">{val.icon}</div>
                        <div className="content">
                          <h3 className="title">{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </Translation>
    );
  }
}
export default REAUPay;
