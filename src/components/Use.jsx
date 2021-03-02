// eslint-disable-next-line

import React, {useRef, useEffect} from "react";
import Footer from './Footer';
import Header from './Header';
import styles from '../css/bank.module.css';
import '../css/use.css';
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

const Use = () => {
    const typeformRef = useRef(null)

    const isProduction = () => {
        if (process.env.NODE_ENV === 'production') {
            return true;
        }
        return false;
    }

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://9m2388521uo.typeform.com/to/R4tjuppJ', {
            opacity: 0,
            shareGoogleAnalyticsInstance: isProduction(),
        })
    }, [typeformRef])

    return (
        <>
            <ScrollToTopOnMount/>
            <Header autofocus/>
            <main className={styles.bank_main}>
                <img src={jpyc} className={styles.bank_jpyc_img} alt="" />
                <div className={styles.bank_buy_text}>JPYCでAmazonの商品を購入する</div>
                <div className={styles.bank_flow}>
                    <div>商品受け取りまでの流れ</div>
                    <div className={styles.bank_items}>
                        <div className={styles.bank_item}>
                            <img src={phone} className={styles.bank_imgs} alt="" />
                            <div className={styles.bank_item_title}>フォームを入力</div>
                        </div>
                        <div>→</div>
                        <div className={styles.bank_item}>
                            <img src={money} className={styles.bank_imgs} alt="" />
                            <div className={styles.bank_item_title}>JPYC送金</div>
                            <div className={styles.bank_item_desc}>(別途手数料として<br/>ETHが必要です)</div>
                        </div>
                        <div>→</div>
                        <div className={styles.bank_item}>
                            <img src={recieve} className={styles.bank_imgs} alt="" />
                            <div className={styles.bank_item_title}>商品到着</div>
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
                                <p className={styles.bank_style_title}>Step2 JPYC送金</p>
                                <div>
                                    <p>下記ETHアドレスへ送金ください</p>
                                    <div className="bank_2_text">0xAf38B7A0351aFA69F04d287cEdEb39bd5454469C（jpyc.eth）</div>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <p className={styles.bank_style_title}>Step3 商品が到着</p>
                                <p>フォームに記入されたご住所に商品が到着します。<br/>翌営業日までに商品を発送致します。</p>
                            </div>
                        </div>
                    </div>
                </div>        
            </main>
            <Footer />
        </>
    );
};

export default Use;
