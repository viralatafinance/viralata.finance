import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} - Vira-lata Finance </title>
          <meta name="description" content="Vira-lata Finance" />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
