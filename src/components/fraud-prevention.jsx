// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/prevention.css";



class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const Prevention = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <main className="prevention_main">
        <div className="prevention-main">
          <div className="prevention-head">
            <p className="prevention-date" data-i18n="prevention.date"></p>
            <p className="prevention-company" data-i18n="prevention.com"></p>
          </div>
          <h2 className="prevention-page-title" data-i18n="prevention.mainText">
          </h2>
          <p className="prevention-text-first" data-i18n="prevention.first"></p>
          <p className="prevention-text-first" data-i18n="prevention.second"></p>
          <p className="prevention-text-first" data-i18n="prevention.third"></p>
          <p className="prevention-text-first" data-i18n="prevention.fourth"></p>
          <p className="prevention-text-first" data-i18n="prevention.fifth"></p>
          <p className="prevention-text-first" data-i18n="prevention.sixth"></p>
          <p className="prevention-text-first" data-i18n="prevention.seventh"></p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Prevention;
