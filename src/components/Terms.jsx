// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/privacy.css";
import LoadI18nDataOnMount from "./LoadI18nDataOnMount";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const Terms = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <LoadI18nDataOnMount />
      <main className="shikn_main">
        <h2 className="privacy-page-title" data-i18n="terms.mainText">
        </h2>
        <div className="privacy-main">
          <div>
            <h3 data-i18n="terms.first.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.first.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.first.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.first.subText.third">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.first.subText.fourth">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.second.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.second.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.third.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.third.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.third.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fourth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.fourth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.third">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.fourth">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.fifth.mainText">
                  </p>
                  <p data-i18n="terms.fourth.subText.fifth.first">
                  </p>
                  <p data-i18n="terms.fourth.subText.fifth.second">
                  </p>
                  <p data-i18n="terms.fourth.subText.fifth.third">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fifth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.fifth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fifth.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.sixth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.sixth.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.seventh.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.seventh.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventh.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventh.subText.third">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.eighth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.eighth.subText.first.mainText">
                  </p>
                  <ol>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.first">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.second">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.third">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.fourth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.fifth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.sixth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.seventh">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.eighth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.ninth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.tenth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.eleventh">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.twelfth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.thirteenth">
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p data-i18n="terms.eighth.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eighth.subText.third">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.ninth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.ninth.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.tenth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.tenth.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.eleventh.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.eleventh.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.third">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.fourth">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.fifth">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.twelfth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.twelfth.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.thirteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.thirteenth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.thirteenth.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fourteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.fourteenth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourteenth.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fifteenth.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.fifteenth.subText">
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.sixteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.sixteenth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.sixteenth.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.seventeenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.seventeenth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventeenth.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventeenth.subText.third">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.eighteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.eighteenth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eighteenth.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.nineteenth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.nineteenth.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.nineteenth.subText.second.mainText">
                  </p>
                  <ol>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.first">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.second">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.third">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.fourth">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.fifth">
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p data-i18n="terms.nineteenth.subText.third">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.twentieth.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.twentieth.subText.first.mainText">
                  </p>
                  <ol>
                    <li>
                      <p data-i18n="terms.twentieth.subText.first.first">
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.twentieth.subText.first.second">
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p data-i18n="terms.twentieth.subText.second">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.twentieth.subText.third">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.twenty-first.mainText">
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.twenty-first.subText.first">
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.twenty-first.subText.second">
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.end.mainText">
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.end.subText.first"></p>
              <p data-i18n="terms.end.subText.second"></p>
            </div>
          </div>
          <div className="furusato-end">以上</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
