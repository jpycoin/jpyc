// eslint-disable-next-line

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../css/index.module.css";
// images
import people from "../image/people.png";
import people2 from "../image/people2.png";
import jpyc from "../image/jpyc.png";
import jpy from "../image/jpy.png";
import eth from "../image/eth.png";
import btc from "../image/btc.png";
import jpyc2 from "../image/jpyc2.png";
import ido from "../image/people/Ido.jpg";
import ohta from "../image/people/Ohta.jpg";
import hint from "../image/hint.png";
import ETHBlack from "../image/eth-black.svg";
import Polygon from "../image/polygon.svg";
import xDai from "../image/xdai.svg";
import LoadI18nDataOnMount from "./LoadI18nDataOnMount";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const index = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <LoadI18nDataOnMount />
      <main className="main">
        <section className={styles.index_top}>
          <img src={jpyc2} alt="" />
          <p>
            <span data-i18n="index.heroArea.mainText.first" />
            <br />
            <span data-i18n="index.heroArea.mainText.second" />
          </p>
        </section>

        <section className={styles.buy}>
          <div className={styles.buy_top}>
            <div className={styles.buy_coins}>
              <div className={styles.buy_coins_inner}>
                <img src={jpy} alt="jpy" />
                <img src={btc} alt="btc" />
                <img src={eth} alt="eth" />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={"long-arrow-alt-right"}
                  className={styles.buy_arrow}
                />
              </div>
            </div>
            <img src={jpyc} className={styles.jpyc} alt="jpyc" />
          </div>
          <div className={styles.buy_buttom}>
            <Link to="/buy">
              <button data-i18n="common.buyJPYC" />
            </Link>
            <p data-i18n="index.innerArea.subText" />
          </div>
        </section>

        <section className={styles.feature} id="feature">
          <div className={styles.feature_item}>
            <p
              className={styles.feature_title}
              data-i18n="index.feature.mainText"
            />
            <div>
              <div className={styles.feature_center}>
                <h3 data-i18n="index.feature.first.mainText">
                </h3>
                <p data-i18n="index.feature.first.subText"></p>
              </div>
              <div className={styles.feature_center}>
                <h3 data-i18n="index.feature.second.mainText">
                </h3>
                <p data-i18n="index.feature.second.subText">
                </p>
                <p data-i18n="index.feature.second.note">
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.multichain} id="multichain">
          <div className={styles.multichain_top}>
            <div className={styles.multichain_label}>
              <p data-i18n="index.multichain.label"></p>
            </div>
            <h3>
              <span data-i18n="index.multichain.mainText.first">
              </span>
              <br class={styles.multichain_br} />
              <span data-i18n="index.multichain.mainText.second">
              </span>
            </h3>
          </div>
          <div className={styles.multichain_item}>
            <ul>
              <li>
                <a
                  href="https://etherscan.io/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ETHBlack}
                    alt="Ethereumのロゴ"
                    className={styles.multichain_img}
                    id="JPYC"
                  />
                  <p>
                    Ethereum <br className={styles.multichain_sp_br} />
                    Mainnet
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="https://explorer-mainnet.maticvigil.com/address/0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c/transactions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Polygon}
                    alt="Ethereumのロゴ"
                    className={styles.multichain_img}
                    id="JPYC"
                  />
                  <p>
                    Polygon
                    <br />
                    (Matic Network)
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="https://blockscout.com/xdai/mainnet/address/0x417602f4fbdd471A431Ae29fB5fe0A681964C11b/transactions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={xDai}
                    alt="Ethereumのロゴ"
                    className={styles.multichain_img}
                    id="JPYC"
                  />
                  <p>xDai</p>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.join} id="newsletter">
          <div className={styles.inner_join}>
            <p
              className={styles.join_text}
              data-i18n="index.newsletter.subText"
            >
            </p>
            <a
              href="https://blog.jpyc.jp/subscribe_newsletter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.join_button}
                data-i18n="index.newsletter.button"
              >
              </button>
            </a>
          </div>
        </section>

        <section className={styles.grant} id="grant">
          <div className={styles.inner_grant}>
            <p className={styles.grant_text} data-i18n="index.grant.subText">
            </p>
            <a
              href="https://grant.jpyc.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.grant_button}
                data-i18n="index.grant.button"
              >
              </button>
            </a>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contact_item}>
            <p
              className={styles.contact_title}
              data-i18n="index.contact.first.title"
            >
            </p>
            <div className={styles.contact_center}>
              <h3 data-i18n="index.contact.first.mainText">
              </h3>
              <p data-i18n="index.contact.first.subText">
              </p>
              <a
                href="https://jpyc-support.freshdesk.com/support/tickets/new"
                target="__href"
              >
                <button data-i18n="index.contact.button"></button>
              </a>
            </div>
            <img src={people} className={styles.contact_image} alt="" />
          </div>
          <div className={styles.contact_item}>
            <p
              className={styles.contact_title}
              data-i18n="index.contact.second.title"
            >
            </p>
            <div className={styles.contact_center}>
              <h3 data-i18n="index.contact.second.mainText">
              </h3>
              <p data-i18n="index.contact.second.subText">
              </p>
              <Link to="/company">
                <button data-i18n="index.contact.button"></button>
              </Link>
            </div>
            <img src={people2} className={styles.contact_image} alt="" />
          </div>
        </section>

        <section className={styles.tax}>
          <p className={styles.tax_title} data-i18n="index.tax.mainText">
          </p>
          <div className={styles.tax_people}>
            <img
              src={ido}
              className={styles.tax_people_img}
              alt="Hironori Ido"
            />
            <div className={styles.tax_center}>
              <p
                className={styles.tax_name}
                data-i18n="index.tax.person.first.name"
              >
              </p>
              <p
                className={styles.tax_description}
                data-i18n="index.tax.person.first.description"
              >
              </p>
            </div>
            <a href="https://ido-office.com/contact" target="__blank">
              <button
                className={styles.tax_button}
                data-i18n="index.tax.person.button"
              >
              </button>
            </a>
          </div>
          <div className={styles.tax_people}>
            <img src={ohta} className={styles.tax_people_img} alt="Ota Yohei" />
            <div className={styles.tax_center}>
              <p
                className={styles.tax_name}
                data-i18n="index.tax.person.second.name"
              >
              </p>
              <p
                className={styles.tax_description}
                data-i18n="index.tax.person.second.description"
              >
              </p>
            </div>
            <a href="https://wakaba-tax.tokyo" target="__blank">
              <button
                className={styles.tax_button}
                data-i18n="index.tax.person.button"
              >
              </button>
            </a>
          </div>
          <div className={styles.tax_people}>
            <img src={hint} className={styles.tax_people_img} alt="member" />
            <div className={styles.tax_center}>
              <p
                className={styles.tax_description_2}
                data-i18n="index.tax.wanted.mainText"
              >
              </p>
            </div>
            <Link to="/company">
              <button
                className={styles.tax_button}
                data-i18n="index.tax.wanted.button"
              >
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default index;
