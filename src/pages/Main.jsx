import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import "react-vertical-timeline-component/style.min.css";
import Header from "./components/Header";

import Hero from "./components/Hero";
import REAU from "./components/REAU";
import REAUPay from "./components/REAUPay";
import Roadmap from "./components/Roadmap";
import Testimonial from "./components/Testimonial";
import CharityFund from "./components/CharityFund";
import Footer from "./components/Footer";
import Helmet from "./components/Helmet";

class Main extends Component {
  componentDidMount() {
    const qs = this.props.location.search.toLowerCase();
    if (qs.indexOf("lang=en") >= 0) {
      this.props.i18n.changeLanguage("en");
    } else if (qs.indexOf("lang=ptBR") >= 0) {
      this.props.i18n.changeLanguage("ptBR");
    } else if (qs.indexOf("lang=es") >= 0) {
      this.props.i18n.changeLanguage("es");
    }
  }

  render() {
    return (
      <div className="active-dark">
        <Helmet pageTitle="$REAU" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
          {...this.props}
        />

        <div className="slider-wrapper">
          <Hero />
        </div>

        <section id="reautoken" className="pb--120 bg_color--1">
          <REAU />
        </section>

        <section id="reaupay" className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <REAUPay />
          </div>
        </section>

        <section id="roadmap" className="bg_color--1 ptb--120">
          <div className="container">
            <Roadmap />
          </div>
        </section>
        
        <section id="charity-fund" className="rn-testimonial-area ptb--120">
          <div className="container">
            <CharityFund />
          </div>
        </section>


        <section id="testimonials" className="bg_color--1 rn-testimonial-area ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </section>

        <div className="backto-top">
          <ScrollToTop showUnder={160} style={{ bottom: 32 }}>
            <FiChevronUp />
          </ScrollToTop>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Main;
