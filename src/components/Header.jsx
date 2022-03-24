// eslint-disable-next-line

import React from "react";
import Icon from "../image/logo2.png";
import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../css/header.css";

const index = () => {
  return (
    <header>
      <div className={styles.header_wrapper} id="header_wrapper">
        <div className={styles.address_alert} id="address_alert">
          <p>
            <span data-i18n="header.alert.description">
              【注意】JPYC購入時に入力するETHアドレスは「取引所のアドレス」ではなく「個人用ウォレット」のアドレスからお願いします。個人用ウォレットの作成方法は
            </span>
            <a
              href="https://blog.jpyc.jp/metamask-part1  "
              target="_blank"
              rel="noopener noreferrer"
              data-i18n="header.alert.descriptionMarked"
            >
              こちら
            </a>
          </p>
        </div>

        <div className={styles.header_wrapper_inner} id="header_wrapper_inner">
          <Link to="/">
            <img src={Icon} alt="アイコン" className={styles.logo} id="JPYC" />
          </Link>
          <div className="header_nav move" id="header_nav">
            <ul>
              <li>
                <a
                  href="https://app.jpyc.jp/"
                  className={styles.nav_item}
                >
                  JPYC Apps
                </a>
              </li>
            </ul>
          </div>
          <a className="menu_btn" id="menu_btn" href="/">
            <span className="line"></span>
          </a>
          <div className={styles.header_right}>
            <HashLink
              to="/#feature"
              className={`${styles.header_right_item} ${styles.header_right_text}`}
              data-i18n="common.JPYCIs"
            >
              JPYCとは
            </HashLink>
            <HashLink
              to="/#newsletter"
              className={`${styles.header_right_item} ${styles.header_right_text}`}
              data-i18n="common.newsletter"
            >
              ニュースレター
            </HashLink>
            <HashLink
              to="/#grant"
              className={`${styles.header_right_item} ${styles.header_right_text}`}
              data-i18n="common.grant"
            >
              JPYC Grant
            </HashLink>
            <HashLink
              to="/#contact"
              className={`${styles.header_right_item} ${styles.header_right_text} ${styles.contact}`}
              data-i18n="common.contact"
            >
              お問い合わせ
            </HashLink>
            <div
              className={`${styles.header_right_item} ${styles.header_button}`}
            >
            <a
              href="https://app.jpyc.jp/"
              className={styles.nav_item}
            >
                <button className={styles.buy_jpyc} data-i18n="common.JPYCApps">
                  JPYC Apps
                </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
