import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Translation } from "react-i18next";

const ArrowIcon = (props) => {
  return <IoIosArrowForward style={{ marginRight: 5, marginTop: -2 }} />;
};

class CharityFund extends Component {
  render() {
    let title = <Translation>{(t) => t("Fundo de caridade Viralata Finance")}</Translation>;
    let description = (
      <div className="testimonial-text">
        <p>
          <Translation>
            {(t) => t("O fundo de caridade é uma carteira na blockchain para receber doações em nome da Viralata Finance que são mensalmente repassadas para ONG's parceiras.")}
          </Translation>
          <br />
          <br />
          <Translation>
            {(t) => (
              <>
                {t("Todas as transações são feitas de forma transparente e você pode acompanhar ")}
                <a class="theme-color" href="https://bscscan.com/address/0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e">
                  {t("aqui (diretamente pelo BSCscan) ")}
                </a>
                {t("e também no ")}
                <a class="theme-color" href="https://viralatometro.com/#/fundo-caridade">
                  {t("Viralatômetro.")}
                </a>
              </>
            )}
          </Translation>
        </p>
      </div>
    );

    return (
      <Translation>
        {(t) => (
          <React.Fragment>
            <div className="portfolio-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title" style={{ textAlign: "center", marginBottom: 60 }}>
                    <h2>{title}</h2>
                    <p style={{ fontSize: 24 }}>{description}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title" style={{ textAlign: "center", marginBottom: 60 }}>
                    <img style={{ width: "auto", height: 200, marginTop: 50, marginBottom: 50 }} src={`/assets/images/logo/logo-caridade.png`} alt="Viralata Finance" />
                  </div>
                  <div style={{ textAlign: "center", fontSize: 22 }}>
                    <a class="theme-color" href="https://bscscan.com/address/0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e">
                      0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e
                    </a>
                  </div>
                </div>
              </div>

              <div className="row mt--30 mt_sm--10">
                <div className="col-lg-12 col-md-12 ">
                  <div className="mb--30">
                    <h3 className="title">{t("Como funciona?")}</h3>
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
                          `Repasse mensal - no último dia do mês, iniciando em 31/05/2021 serão transformados 20% do total do fundo de caridade em REAUs para moeda estável e enviado para as ONGs parceiras, fazendo uma divisão igualitária entre elas;`
                        )}
                      </li>
                      <li>
                        <ArrowIcon />
                        {t(
                          "Fundo restante - 80% restantes permanecerão no fundo de modo a gerar um crescimento progressivo, como se fosse um segundo buraco negro gerador de renda para o fundo de caridade;"
                        )}
                      </li>
                      <li>
                        <ArrowIcon />
                        {t(
                          "Estímulo ao crescimento - a ideia final é que somente os rendimentos do fundo sejam usados para doações, de forma estimular o seu crescimento progressivo e ajudar cada vez mais ONGs;"
                        )}
                      </li>
                      <li>
                        <ArrowIcon />
                        <a href={t("FundoCaridadeLink")}>{t("Saiba mais clicando aqui.")}</a>
                      </li>
                    </ul>
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
export default CharityFund;
