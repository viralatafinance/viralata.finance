import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Translation } from "react-i18next";

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
        conseguimos arrecadar um valor que será destinado à compra de ração e a vacinação anual de nossos animais. Esse doação terá um impacto imenso
        em nosso ano, pois nos auxiliará nesse momento em que não podemos realizar nossos eventos de arrecadação e que nosso brechó opera
        on-line/presencial.
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

class Testimonial extends Component {
  render() {
    let title = <Translation>{(t) => t("Ações sociais")}</Translation>;
    let description = (
      <div className="testimonial-text">
        <p>
          <Translation>
            {(t) => t("O Vira-lata Finance foi inspirado pelo vira-lata caramelo e por milhares de outros vira-latas que vivem nas ruas do Brasil.")}
          </Translation>
          <br />
          <Translation>
            {(t) =>
              t("Como comunidade, acreditamos que temos o poder de fazer a diferença por meio de doações comunitárias para instituições de caridade.")
            }
          </Translation>
        </p>
        <p>
          <Translation>{(t) => t("Total arrecadado:")}</Translation>{" "}
          <b style={{ color: "white" }}>
            R${" "}
            {testimonials
              .map((r) => r.total)
              .reduce((a, b) => a + b)
              .toLocaleString()}
          </b>
        </p>
        <p>
          <Translation>{(t) => t("Conheça mais sobre as instituições ajudadas")}</Translation>
        </p>
      </div>
    );

    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title" style={{ textAlign: "center", marginBottom: 60 }}>
                <h2>{title}</h2>
                <p style={{ fontSize: 24 }}>{description}</p>
              </div>
            </div>
            <Tabs style={{ width: "100%" }}>
              <TabList className="testimonial-thumb-wrapper" style={{ marginBottom: 40 }}>
                {testimonials.map((t, i) => {
                  return (
                    <Tab key={i}>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img src={`/assets/images/client/${t.image}`} alt={`${t.name}`} />
                        </div>
                      </div>
                    </Tab>
                  );
                })}
              </TabList>
              {testimonials.map((t, i) => {
                return (
                  <TabPanel key={i}>
                    <div className="rn-testimonial-content text-center">
                      <div className="author-info">
                        <h3>
                          <a style={{ color: "white" }} href={t.instagramLink}>
                            {t.name}
                          </a>
                        </h3>
                      </div>
                      <div className="inner">
                        {t.testimonial ? (
                          t.testimonial
                        ) : (
                          <Translation>
                            {(translate) => (
                              <p style={{ color: "#999" }}>
                                {translate("A")}{" "}
                                <a className="theme-color" href="https://viralata.finance">
                                  viralata.finance
                                </a>{" "}
                                {translate("realizou uma ação no dia")} <span style={{ color: "white" }}>{t.date}</span>{" "}
                                {translate("arrecadando um total de")} <span style={{ color: "white" }}>R$ {t.total.toLocaleString()} </span>{" "}
                                {translate("para")} {t.name}.
                              </p>
                            )}
                          </Translation>
                        )}
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
