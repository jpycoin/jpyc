import React, {useRef, useEffect} from "react";
import Footer from './Footer';
import Header from './Header';
import styles from '../css/bank.module.css';
import '../css/use.css';
import jpyc from '../image/logo2.png';
import * as typeformEmbed from '@typeform/embed';
import { Link } from 'react-router-dom';

class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}

const Individual = () => {
    const typeformRef = useRef(null)

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, "https://9m2388521uo.typeform.com/to/ixOXnRGV", {
            opacity: 0
        })
    }, [typeformRef])

    return (
        <>
            <ScrollToTopOnMount/>
            <Header autofocus/>
            <main className={styles.bank_main}>
                <img src={jpyc} className={styles.bank_jpyc_img} alt="" />
                <div className={styles.bank_buy_text}>個人の方：JPYCについて問い合わせる</div>

                <div className={styles.links}>
                    <a href='https://peing.net/ja/jpy_coin' target="__blank">
                        <button className={styles.other_page_link}>匿名で問い合わせる</button>
                    </a>
                    <Link to="/company">
                        <button className={styles.other_page_link}>法人の方はこちら</button>
                    </Link>
                </div>

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

export default Individual;
