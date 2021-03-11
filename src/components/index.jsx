// eslint-disable-next-line

import React from "react";
import people from "../image/people.png";
import people2 from "../image/people2.png";
import Footer from './Footer';
import Header from './Header';
import styles from '../css/index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jpyc from '../image/jpyc.png';
import jpy from '../image/jpy.png';
import eth from '../image/eth.png';
import btc from '../image/btc.png';
import jpyc2 from '../image/jpyc2.png';
import { Link } from 'react-router-dom';
import ido from '../image/people/Ido.jpg';
import hint from '../image/hint.png';

class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}

const index = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <Header />
            <main className="main">
                <section className={styles.index_top}>
                    <img src={jpyc2} alt="" />
                    <p>JPYC：世界を牽引する<br />日本円ステーブルコイン</p>
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
                                <FontAwesomeIcon icon={"long-arrow-alt-right"} className={styles.buy_arrow}/>
                            </div>
                        </div>
                        <img src={jpyc} className={styles.jpyc} alt="jpyc" />
                    </div>
                    <div className={styles.buy_buttom}>
                        <Link to="/buy">
                            <button>JPYCを購入する</button>
                        </Link>
                        <p>日本円ステーブルコインの「JPYC」を誰でも簡単に日本円で購入できるようになりました</p>
                    </div>
                </section>

                <section className={styles.feature} id="feature">
                    <div className={styles.feature_item}>
                        <p className={styles.feature_title}>JPYCの特徴</p>
                        <div>
                            <div className={styles.feature_center}>
                                <h3>日本初の日本円ステーブルコイン（ERC20）</h3>
                                <p>JPYC（JPYCoin）は日本初のブロックチェーン技術（ERC20）を活用した日本円ステーブルコインです。イーサリアムのメインネットで動いており、常に1 JPYC = 1円で物品の売買に利用可能です。メタマスクなど、お持ちのウォレットやUniswapなどの二次流通市場で日本円建てのコインとして使うことができます。</p>
                            </div>
                            <div className={styles.feature_center}>
                                <h3>JPYC（JPYCoin）の法的整理</h3>
                                <p>JPYCは1 JPYC ＝ 1円で常に購入・使用できる通貨建資産であり、資金決済法上の自家型前払式支払手段です。暗号資産ではありません。一方、イーサリアムの規格であるERC20を採用しているため、イーサリアム（メインネット）上での取引に利用可能です。</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.comming_soon}>
                    <div className={styles.soon_text}>coming soon</div>
                    <section className={styles.join} id="join">
                        <div className={styles.inner_join}>
                            <p className={styles.join_text}>JPYCは個人・企業問わず素晴らしい発想力、行動力を持つ方々と日本発のトークンエコシステムの開発とその発展に挑戦します。あなたのアイデアを形にするために、JPYCコミュニティに参加しませんか？</p>
                            <button disabled className={styles.join_button}>JPYCコミュニティに応募する</button>
                        </div>
                    </section>
                </div>

                <section className={styles.use}>
                    <p>JPYCは常に1 JPYC = 1円で物品との取引をお楽しみいただけます。</p>
                    <Link to="/use">
                        <button>AmazonでJPYCを使う</button>
                    </Link>
                </section>

                <section className={styles.contact} id="contact">
                    <div className={styles.contact_item}>
                        <p className={styles.contact_title}>一般の方へ</p>
                        <div className={styles.contact_center}>
                            <h3>なにかお困りのことはありませんか？</h3>
                            <p>JPYCは日本初の試みであり、疑問点がいくつも生まれるかもしれませんが、私たちがサポートいたします。頻度が多いものについては「よくある質問」にまとめますのでもう少々お待ち下さい。</p>
                            <a href="https://jpyc.channel.io/" target="__href"><button>問い合わせる</button></a>
                        </div>
                        <img src={people} className={styles.contact_image} alt="" />
                    </div>
                    <div className={styles.contact_item}>
                        <p className={styles.contact_title}>法人の方へ</p>
                        <div className={styles.contact_center}>
                            <h3>御社のビジネスをJPYCによって加速させませんか？</h3>
                            <p>JPYCは、適法に発行されているERC20プリペイドコインです。ブロックチェーンを活用した決済、ブロックチェーンを活用した財務健全性の向上や新規ユーザーの獲得などが期待できます。</p>
                            <Link to="/company"><button>問い合わせる</button></Link>
                        </div>
                        <img src={people2} className={styles.contact_image} alt="" />
                    </div>
                </section>

                <div className={styles.comming_soon}>
                    <div className={styles.soon_text}>coming soon</div>
                    <section className={styles.exchange}>
                        <div className={styles.exchange_left}>
                            <h3 className={styles.exchange_left_title}>JPYCとICBの交換について</h3>
                            <div className={styles.exchange_left_text}>JPYCとICBは1 JPYC = 1 ICBの割合で交換可能です。Gas代のみご負担いただきますが、ICBを既に保有されている方はJPYCに交換することが可能です。</div>
                        </div>
                        <div className={styles.exchange_right}>
                            <button disabled className={styles.exchange_button}>ICBをJPYCに交換する</button>
                        </div>
                    </section>
                </div>

                <section className={styles.tax}>
                    <p className={styles.tax_title}>暗号資産やJPYCに詳しい税理士はこちら</p>
                    <div className={styles.tax_people}>
                        <img src={ido} className={styles.tax_people_img} alt="Hironori Ido"/>
                        <div className={styles.tax_center}>
                            <p className={styles.tax_name}>井堂 裕功</p>
                            <p className={styles.tax_description}>Quantum Accounting株式会社取締役。複数のベンチャー企業と顧問契約を締結し、会計、税務面のアドバイザリー業務を提供している傍ら、暗号資産にかかる会計、税務の検討を日々行なっている。暗号資産による納税も開始。</p>
                        </div>
                        <a href="https://ido-office.com/contact" target="__blank">
                            <button className={styles.tax_button}>お問い合わせはこちら</button>
                        </a>
                    </div>
                    <div className={styles.tax_people}>
                        <img src={hint} className={styles.tax_people_img} alt="member"/>
                        <div className={styles.tax_center}>
                            <p className={styles.tax_description_2}>JPYCでの納税に詳しい税理士を募集しています</p>
                        </div>
                        <Link to="/company">
                            <button className={styles.tax_button}>運営に連絡する</button>
                        </Link>
                    </div>
                </section>
                
            </main>
            <Footer />
        </>
    )
};

export default index;