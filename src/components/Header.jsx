// eslint-disable-next-line

import React from "react";
import Icon from '../image/logo2.png';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import '../css/header.css';

const index = () => {
    return (
        <header>

            <div className={styles.header_wrapper} id="header_wrapper">
                <div className={styles.address_alert} id="address_alert">
                    <p>【注意】JPYC購入時に入力するETHアドレスは「取引所のアドレス」ではなく「個人用ウォレット」のアドレスからお願いします。個人用ウォレットの作成方法は
                        <a href="https://note.com/ocurima/n/n29e1fd7ecbdd" rel="noopener" target="_blank">
                            こちら
                        </a>
                    </p>
                </div>

                <div className={styles.header_wrapper_inner} id="header_wrapper_inner">
                    <Link to="/">
                        <img src={Icon} alt='アイコン' className={styles.logo} id="JPYC" />
                    </Link>
                    <div className="header_nav move" id="header_nav">
                        <ul>
                            <li>
                                <Link to="/buy" className={styles.nav_item}>JPYCを購入する</Link>
                            </li>
                            <li>
                                <Link to="/use" className={styles.nav_item}>JPYCを使う</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="menu_btn" id="menu_btn" href="">
                        <span className="line"></span>
                    </a>
                    <div className={styles.header_right}>
                        <HashLink to="/#feature" className={`${styles.header_right_item} ${styles.header_right_text}`}>JPYCとは</HashLink>
                        <HashLink to="/#join" className={`${styles.header_right_item} ${styles.header_right_text}`}>コミュニティ</HashLink>
                        <HashLink to="/#contact" className={`${styles.header_right_item} ${styles.header_right_text} ${styles.contact}`}>お問い合わせ</HashLink>
                        <div className={`${styles.header_right_item} ${styles.header_button}`}>
                            <Link to="/use">
                                <button className={styles.use_jpyc}>JPYCをつかう</button>
                            </Link>
                        </div>
                        <div className={`${styles.header_right_item} ${styles.header_button}`}>
                            <Link to="/buy">
                                <button className={styles.buy_jpyc}>JPYCを購入する</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default index;