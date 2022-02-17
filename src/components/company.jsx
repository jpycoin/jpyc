// eslint-disable-next-line

import React, { useRef, useEffect } from "react";
import Footer from './Footer';
import Header from './Header';
import styles from '../css/bank.module.css';
import '../css/use.css';
import jpyc from '../image/logo2.png';
import * as typeformEmbed from '@typeform/embed';
import LoadI18nDataOnMount from "./LoadI18nDataOnMount";


class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}

const Company = () => {
    const typeformRef = useRef(null)

    const isProduction = () => {
        if (process.env.NODE_ENV === 'production') {
            return true;
        }
        return false;
    }

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://jpyc.typeform.com/to/A6kb23Pb?typeform-embed=embed-widget&typeform-source=localhost&typeform-medium=embed-sdk&embed-opacity=0&typeform-embed-id=9g6zh', {
            opacity: 0,
            shareGoogleAnalyticsInstance: isProduction(),
        })
    }, [typeformRef])

    return (
        <>
            <ScrollToTopOnMount />
            <LoadI18nDataOnMount />
            <Header autofocus />
            <main className={styles.bank_main}>
                <img src={jpyc} className={styles.bank_jpyc_img} alt="jpyc" />
                <div className={styles.bank_buy_text} data-i18n="company.mainText"></div>

                <div className={styles.buy_step_whole}>
                    <div className={styles.buy_card}>
                        <div className={styles.buy_card_text}>
                            <div className={styles.step}>
                                <div className={styles.bank_typeform} ref={typeformRef}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default Company;
