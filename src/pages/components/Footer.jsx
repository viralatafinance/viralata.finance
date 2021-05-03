import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";
import { Translation } from "react-i18next";

const SocialShare = [
  { Social: <FaTelegram />, link: "Telegram" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/br.viralata.finance" },
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/viralatafinance",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/viralatafinance" },
  { Social: <FaReddit />, link: "https://www.reddit.com/r/viralatafinance" },
];

const Footer = () => {
  return (
    <Translation>
      {(t) => (
        <div
          className="footer-style-2 ptb--30 bg_image bg_image--1"
          data-black-overlay="6"
        >
          <div className="wrapper plr--50 plr_sm--20">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="inner">
                  <div className="text">
                    <p>Copyright © 2021 Viralata Finance.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="inner text-center">
                  <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                    {SocialShare.map((val, i) => (
                      <li key={i}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${t(val.link)}`}
                        >
                          {val.Social}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                  <div className="text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Translation>
  );
};
export default Footer;
