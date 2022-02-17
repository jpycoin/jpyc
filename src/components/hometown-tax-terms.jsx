// eslint-disable-next-line

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../css/privacy.css';
import LoadI18nDataOnMount from "./LoadI18nDataOnMount";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const furusatoNozei = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <LoadI18nDataOnMount />
      <main className="shikn_main">
        <h2 className="privacy-page-title" data-i18n="furusato-nozei.mainText">
        </h2>
        <div className="privacy-main">
          <div>
            <h3 data-i18n="furusato-nozei.first.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.first.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.first.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.first.subText.third"></p></li>
                <li><p data-i18n="furusato-nozei.first.subText.fourth"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.second.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.second.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.second.subText.second"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.third.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.third.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.third.subText.second"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fourth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fourth.subText.first.mainText"></p></li>
                <ol>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.first"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.second"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.third"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.fourth"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.fifth"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.sixth"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.seventh"></p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.eighth"></p></li>
                </ol>
                <li><p data-i18n="furusato-nozei.fourth.subText.second.mainText"></p></li>
                <ol>
                  <li>
                    <p data-i18n="furusato-nozei.fourth.subText.second.first.mainText"></p>
                    <p data-i18n="furusato-nozei.fourth.subText.second.first.subText"></p>
                    <ul>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.first"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.second"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.third"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fourth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fifth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.sixth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.seventh"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.eighth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.ninth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.tenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.eleventh"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twelfth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.thirteenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fourteenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fifteenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.sixteenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.seventeenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.eighteenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.nineteenth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twentieth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-first"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-second"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-third"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-fourth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-fifth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-sixth"></p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-seventh"></p></li>
                    </ul>
                  </li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.second.second"></p></li>
                </ol>
                <li><p data-i18n="furusato-nozei.fourth.subText.third"></p></li>
                <li><p data-i18n="furusato-nozei.fourth.subText.fourth"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fifth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fifth.subText.first"> </p></li>
                <li><p data-i18n="furusato-nozei.fifth.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.fifth.subText.third"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.sixth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.sixth.subText"></p>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.seventh.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.seventh.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.seventh.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.seventh.subText.third"></p></li>
                <li><p data-i18n="furusato-nozei.seventh.subText.fourth"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.eighth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.eighth.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.ninth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.ninth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.ninth.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.ninth.subText.third"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.tenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.tenth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.tenth.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.tenth.subText.third"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.eleventh.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="furusato-nozei.eleventh.subText.first.mainText"></p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.first"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.second"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.third"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fourth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fifth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.sixth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.seventh"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.eighth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.ninth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.tenth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.eleventh"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.twelfth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.thirteenth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fourteenth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fifteenth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.sixteenth"></p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.seventeenth"></p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.eleventh.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.eleventh.subText.third"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.twelfth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.twelfth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.third"></p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.fourth"></p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.fifth"></p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.sixth"></p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.seventh"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.thirteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.thirteenth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.thirteenth.subText.second"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fourteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fourteenth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.fourteenth.subText.second"></p></li>
                <li>
                  <p data-i18n="furusato-nozei.fourteenth.subText.third.mainText"></p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.first"></p></li>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.second"></p></li>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.third"></p></li>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.fourth"></p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.fourteenth.subText.fourth"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fifteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fifteenth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.fifteenth.subText.second"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.sixteenth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.sixteenth.subText"></p>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.seventeenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.seventeenth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.seventeenth.subText.second"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.eighteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.eighteenth.subText.first"></p></li>
                <li>
                  <p data-i18n="furusato-nozei.eighteenth.subText.second.mainText"></p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.first"></p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.second"></p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.third"></p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.fourth"></p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.fifth"></p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.eighteenth.subText.third"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.nineteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="furusato-nozei.nineteenth.subText.first.mainText"></p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.nineteenth.subText.first.first"></p></li>
                    <li><p data-i18n="furusato-nozei.nineteenth.subText.first.second"></p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.nineteenth.subText.second"></p></li>
                <li><p data-i18n="furusato-nozei.nineteenth.subText.third"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.twentieth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.twentieth.subText.first"></p></li>
                <li><p data-i18n="furusato-nozei.twentieth.subText.second"></p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.end.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.end.subText.first"></p>
            </div>
          </div>
          <div className="furusato-end" data-i18n="furusato-nozei.end.subText.second"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default furusatoNozei;
