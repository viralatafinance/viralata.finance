import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowForward, IoMdPaw } from "react-icons/io";
import { Translation } from "react-i18next";
const ArrowIcon = (props) => {
  return <IoIosArrowForward style={{ marginRight: 5, marginTop: -2 }} />;
};

const testimonials = [
  {
    image: "5.jpg",
    name: "CAMPO BOM PRA CACHORRO",
    instagram: "@campobompracachorro",
    instagramLink: "https://www.instagram.com/campobompracachorro/",
    date: "05/04/2021",
    total: 13662.0,
    thanks: "https://www.instagram.com/p/CNVSiIvlxgM/?igshid=1fzazq17hn7x9",
    howto: "https://www.instagram.com/stories/highlights/17899065055761227/",
    testimonial: (
      <p style={{ color: "#999" }}>
        Com a ação realizada pela{" "}
        <a className="theme-color" href="https://viralata.finance">
          viralata.finance
        </a>{" "}
        conseguimos arrecadar um valor que será destinado à compra de ração e a vacinação anual de nossos animais. Esse doação terá um impacto imenso em nosso ano, pois nos
        auxiliará nesse momento em que não podemos realizar nossos eventos de arrecadação e que nosso brechó opera on-line/presencial.
      </p>
    ),
  },
  {
    image: "4.jpg",
    name: "KAPA MOGI GUAÇU",
    instagram: "@kapakamaelprotetores",
    instagramLink: "https://www.instagram.com/kapakamaelprotetores/",
    date: "06/04/2021",
    total: 9183.12,
    thanks: "https://www.instagram.com/p/CNYnvvIDMU9/",
    howto: "https://abacashi.com/p/ajude-o-kapa-kamael",
  },
  {
    image: "3.jpg",
    name: "ELOY RABELO NETO",
    instagram: "@eloyrabeloneto",
    instagramLink: "https://www.instagram.com/eloyrabeloneto/",
    date: "06/04/2021",
    total: 3651.92,
    thanks: "https://www.instagram.com/p/CNOfeCljPP3/",
    howto: "https://www.instagram.com/p/CNX9lN5jpE5/",
  },
  {
    image: "2.jpg",
    name: "ONG SÃO LÁZARO",
    instagram: "@abrigosaolazaro",
    instagramLink: "https://www.instagram.com/abrigosaolazaro/",
    date: "09/04/2021",
    total: 1547.0,
    thanks: "https://twitter.com/viralatafinance/status/1382843993998905346",
    howto: "https://www.instagram.com/stories/highlights/18006842821046515/",
  },
  {
    image: "1.jpg",
    name: "CAARP - ABRIGO DE ANIMAIS",
    instagram: "@caarp_",
    instagramLink: "https://instagram.com/caarp_",
    date: "11/04/2021",
    total: 1299.61,
    howto: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMwOTIyMDYwMTY3MjUx?igshid=6lyshei28gfg",
    thanks: "",
  },

  {
    image: "6.jpg",
    name: "INSTITUTO GUARDA ANIMAL",
    instagram: "@institutoguardaanimal",
    instagramLink: "https://www.instagram.com/institutoguardaanimal/",
    date: "04/04/2021",
    total: 33995.86,
    thanks: "https://www.instagram.com/p/CNN6aLsBb4l/",
    howto: "https://www.instagram.com/stories/highlights/18010328458048980/",
  },
  {
    image: "7.jpg",
    name: "APIPA - ASSOCIAÇÃO PIAUIENSE DE PROTEÇÃO E AMOR AOS ANIMAIS",
    instagram: "@apipaoficial",
    instagramLink: "https://www.instagram.com/apipaoficial/",
    date: "02/04/2021",
    total: 2470.0,
    thanks: "https://www.instagram.com/p/CNLjc0rnGQR/",
    howto: "https://www.apipapiaui.org/doe",
  },
  {
    image: "8.jpg",
    name: "MARCINHO BELOTA",
    instagram: "@marcinhobelota",
    instagramLink: "https://www.instagram.com/marcinhobelota/",
    date: "02/04/2021",
    total: 2000.0,
    thanks: "https://www.instagram.com/tv/CNH9yiJpegc/",
    howto: "",
  },
  {
    image: "9.jpg",
    name: "LAR DOS ANIMAIS GOIÂNIA",
    instagram: "@lardosanimaisgoiania",
    instagramLink: "https://www.instagram.com/lardosanimaisgoiania/",
    date: "27/03/2021",
    total: 2500.0,
    thanks: "https://www.youtube.com/watch?v=dV6rDd1-hps",
    howto:
      "https://l.instagram.com/?u=https%3A%2F%2Fbit.ly%2FQueroDoarLarDosAnimais&e=ATOZ2gUsrX9Q2WIBKZrJDB-QdcAcG5OnTW7_mWYO_xJXOWTnN_Lzm7K56l1JQHrz1G0tyRf3vJdvDgotf25xdtcaOzR6sjPdDd_csg&s=1",
  },
  {
    image: "14.jpg",
    name: "ABRIGO FLORA E FAUNA",
    instagram: "@abrigofloraefauna",
    instagramLink: "https://www.instagram.com/abrigofloraefauna/",
    date: "18/04/2021",
    total: 1199.0,
    thanks: "https://twitter.com/viralatafinance/status/1384290709268680712",
    howto: "https://www.instagram.com/stories/highlights/18059308147111228/",
  },
  {
    image: "10.jpg",
    name: "AGAPA",
    instagram: "@angelagomesagapa",
    instagramLink: "https://www.instagram.com/angelagomesagapa/",
    date: "21/04/2021",
    total: 4302.62,
    thanks: "https://www.instagram.com/angelagomesagapa/",
    howto: "https://www.instagram.com/stories/highlights/17920591399420733/",
  },
  {
    image: "11.jpg",
    name: "ABRIGO AMIGA DE UM AUMIGO",
    instagram: "@abrigoamigadeumaumigoof",
    instagramLink: "https://www.instagram.com/abrigoamigadeumaumigoof/",
    date: "25/04/2021",
    total: 11396.14,
    thanks: "https://www.instagram.com/p/COMjG5Cp-bm/",
    howto: "https://www.instagram.com/stories/highlights/18163043998127912/",
  },
  {
    image: "12.jpg",
    name: "JUNTOS POR CARMINHA E 40 CÃES",
    instagram: "@juntosporcarminhae40caes",
    instagramLink: "https://www.instagram.com/juntosporcarminhae40caes/",
    date: "27/04/2021",
    total: 9643.38,
    thanks: "https://www.instagram.com/juntosporcarminhae40caes/",
    howto: "https://www.instagram.com/stories/highlights/17877018269143535/",
  },
  {
    image: "13.jpg",
    name: "ABRIGO VIRA-LATA, VIRA AMOR",
    instagram: "@viralataviraamorcacoal",
    instagramLink: "https://instagram.com/viralataviraamorcacoal",
    date: "02/05/2021",
    total: 5652.85,
    thanks: "https://instagram.com/viralataviraamorcacoal",
    howto: "https://www.instagram.com/p/COY47HInKfQ/?igshid=1a5r09frgdgpl",
  },
];

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
