// eslint-disable-next-line

import React from "react";
import Footer from './Footer';
import Header from './Header';
import styles from '../css/buy.module.css';
import jpy from '../image/jpy.png';
import btc_jpy from '../image/btc-jpy.png';
import jpyc from '../image/logo2.png';
import money from '../image/money.png';
import credit from '../image/credit.png';
import { Link } from 'react-router-dom';
import btc from '../image/btc.png';
import eth from '../image/eth.png';

const { useState } = React

class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}

const Buy = () => {
    const [YenisShown, setYenIsShown] = useState(false)
    const [CryptoisShown, setCryptoIsShown] = useState(false)

    // useEffect(() => {
    //     documentClickHandler.current = e => {     
    //         if (popupRef.current.contains(e.target)) return
    //         setIsShown(false)
    //     }
    // })

    return (
        <>
            <ScrollToTopOnMount/>
            <Header />
            <main className={styles.buy_main}>
                    <div>
                        <img src={jpyc} className={styles.jpyc} alt="" />
                    </div>
                    <div className={styles.text_buy} data-i18n="common.buyJPYC">JPYCを購入する</div>
                    <div className={styles.question} data-i18n="buy.subText">どの通貨でJPYCを購入しますか？</div>
                    <div className={styles.coins}>
                        <div className={`${styles.coin}`}>
                            <img src={jpy} className={styles.jpy} alt="" />
                            <button className={styles.buy_button} onClick={() => setYenIsShown(true)} data-i18n="buy.button.withJPY">日本円で購入する</button>
                        </div>
                        <div className={`${styles.coin}`}>
                            <img src={btc_jpy} className={styles.btc_eth} alt="" />
                            <button className={styles.buy_button} onClick={() => setCryptoIsShown(true)} data-i18n="buy.button.withCrypto">BTC・ETHで購入する</button>
                        </div>
                    </div>

                    {/* ポップアップ */}
                    <div className={`${styles.popup_menu} ${YenisShown ? styles.buy_shown_yen : ''}`}>
                        <button onClick={() => setYenIsShown(false)} className={styles.buy_x}>×</button>
                        <div className={styles.popup_text} data-i18n="buy.popup.mainText">お支払い方法を選択してください</div>
                        <div className={styles.buy_settlement}>
                            <div>
                                <img src={money} className={styles.buy_yen_img} alt="" />
                                <Link to="/bank">
                                    <button className={styles.buy_link_button} data-i18n="buy.popup.button.JPY.bank">銀行振込</button>
                                </Link>
                            </div>
                            <div>
                                <img src={credit} className={styles.buy_yen_img} alt="" />
                                <button className={`${styles.buy_link_button} ${styles.disabled}`} disabled><span data-i18n="buy.popup.button.JPY.credit.first">クレジットカード</span><br/><span data-i18n="buy.popup.button.JPY.credit.second">（準備中）</span></button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.popup_menu} ${CryptoisShown ? styles.buy_shown_crypto : ''}`}>
                        <button onClick={() => setCryptoIsShown(false)} className={styles.buy_x}>×</button>
                        <div className={styles.popup_text} data-i18n="buy.popup.mainText">お支払い方法を選択してください</div>
                        <div className={styles.buy_settlement}>
                            <div className={styles.buy_payment}>
                                <img src={btc} className={styles.buy_crypto_img} alt="" />
                                <button className={`${styles.buy_link_button} ${styles.disabled}`} disabled>BTC<span data-i18n="buy.popup.button.crypto.BTC">（準備中）</span></button>
                            </div>
                            <div className={styles.buy_payment}>
                                <img src={eth} className={styles.buy_crypto_img} alt="" />
                                <Link to="/buyFromETH">
                                    <button className={styles.buy_link_button}>ETH</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </main>
            <Footer />
        </>
    );
};

export default Buy;
