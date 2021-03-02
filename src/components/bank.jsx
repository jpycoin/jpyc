// eslint-disable-next-line

import React, {useRef, useEffect} from "react";
import Footer from './Footer';
import Header from './Header';
import styles from '../css/bank.module.css';
import jpyc from '../image/logo2.png';
import phone from '../image/phone.png';
import money from '../image/money.png';
import recieve from '../image/recieve.png';
import * as typeformEmbed from '@typeform/embed';

class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    render() {
        return null
    }
}

const Bank = () => {
    const typeformRef = useRef(null)

    const isProduction = () => {
        if (process.env.NODE_ENV === 'production') {
            return true;
        }
        return false;
    }

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://9m2388521uo.typeform.com/to/klut3V6v', {
            opacity: 0,
            shareGoogleAnalyticsInstance: isProduction()
        })
    }, [typeformRef])

    return (
        <>
            <ScrollToTopOnMount/>
            <Header />
            <main className={styles.bank_main}>
                <img src={jpyc} className={styles.bank_jpyc_img} alt="" />
                <div className={styles.bank_buy_text}>JPYCを購入する（決済方法：銀行振込）</div>
                <div className={styles.bank_flow}>
                    <div>JPYC受け取りまでの流れ</div>
                    <div className={styles.bank_items}>
                        <div className={styles.bank_item}>
                            <img src={phone} className={styles.bank_imgs} alt="" />
                            <div className={styles.bank_item_title}>フォームを入力</div>
                        </div>
                        <div>→</div>
                        <div className={styles.bank_item}>
                            <img src={money} className={styles.bank_imgs} alt="" />
                            <div className={styles.bank_item_title}>銀行振込</div>
                        </div>
                        <div>→</div>
                        <div className={styles.bank_item}>
                            <img src={recieve} className={styles.bank_imgs} alt="" />
                            <div className={styles.bank_item_title}>JPYCを受け取る</div>
                        </div>
                    </div>
                </div>
                <div className={styles.buy_step_whole}>
                    <div className={styles.buy_card}>
                        <div className={styles.buy_card_text}>
                        <div className={styles.step}>
                            <p className={styles.bank_style_title}>Step1 フォーム入力</p>
                            <div className={styles.bank_typeform} ref={typeformRef}></div>
                        </div>
                        <div className={styles.step}>
                            <p className={styles.bank_style_title}>Step2 銀行振込</p>
                            <div>
                                <p>下記銀行口座にご購入金額をお振り込みください</p>
                                <div className={styles.bank_2_text}>銀行名：GMOあおぞらネット銀行（金融機関コード0310）<br />支店名：法人第二営業部(102)<br />口座の種類：普通預金<br />口座番号：1108585<br />口座名義：ニホンアンゴウシサンイチバ（カ　ＪＰＹＣトリヒキヨウ</div>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <p className={styles.bank_style_title}>Step3 JPYCを受け取る</p>
                            <p>翌営業日までにご指定のETHアドレス宛にJPYCが送金されます。</p>
                        </div>
                        </div>
                    </div>
                </div>        
            </main>
            <Footer />
        </>
    );
}

export default Bank;
