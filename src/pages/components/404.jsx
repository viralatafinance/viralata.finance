import React, { Component } from "react";
import Header from "./Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "./Footer";
import { Translation } from "react-i18next";

class error404 extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <Header
              headerPosition="header--transparent"
              color="color-white"
              logo="logo-light"
            />
            
            <div className="error-page-inner bg_color--4 bg_image bg_image--1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner">
                      <h1 className="title theme-gradient">404!</h1>
                      <h3 className="sub-title">
                        {t("Página não encontrada")}
                      </h3>
                      <span>
                        {t("A página que você está procurando não existe.")}
                      </span>
                      <div className="error-button">
                        <a className="rn-button-style--2 " href="/">
                          {t("Voltar para página inicial")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backto-top">
              <ScrollToTop showUnder={160}>
                <FiChevronUp />
              </ScrollToTop>
            </div>

            <Footer />
          </>
        )}
      </Translation>
    );
  }
}
export default error404;
