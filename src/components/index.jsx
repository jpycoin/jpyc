// eslint-disable-next-line

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styles from '../css/index.module.css';
// images
import people from "../image/people.png";
import people2 from "../image/people2.png";
import jpyc from '../image/jpyc.png';
import jpy from '../image/jpy.png';
import eth from '../image/eth.png';
import btc from '../image/btc.png';
import jpyc2 from '../image/jpyc2.png';
import ido from '../image/people/Ido.jpg';
import ohta from '../image/people/Ohta.jpg';
import hint from '../image/hint.png';
import ETHBlack from '../image/eth-black.svg';
import Polygon from '../image/polygon.svg';
import xDai from '../image/xdai.svg';

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
                    <p><span data-i18n="index.heroArea.mainText.first">JPYC：世界を牽引する</span><br /><span data-i18n="index.heroArea.mainText.second">日本円ステーブルコイン</span></p>
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
                            <button data-i18n="common.buyJPYC">JPYCを購入する</button>
                        </Link>
                        <p data-i18n="index.innerArea.subText">日本円ステーブルコインの「JPYC」を誰でも簡単に日本円で購入できるようになりました</p>
                    </div>
                </section>

                <section className={styles.feature} id="feature">
                    <div className={styles.feature_item}>
                        <p className={styles.feature_title} data-i18n="index.feature.mainText">JPYCの特徴</p>
                        <div>
                            <div className={styles.feature_center}>
                                <h3 data-i18n="index.feature.first.mainText">日本初の日本円ステーブルコイン（ERC20）</h3>
                                <p data-i18n="index.feature.first.subText">JPYC（JPYCoin）は日本初のブロックチェーン技術（ERC20）を活用した日本円ステーブルコインです。イーサリアムのメインネットで動いており、常に1 JPYC = 1円で物品の売買に利用可能です。メタマスクなど、お持ちのウォレットやUniswapなどの二次流通市場で日本円建てのコインとして使うことができます。</p>
                            </div>
                            <div className={styles.feature_center}>
                                <h3 data-i18n="index.feature.second.mainText">JPYC（JPYCoin）の法的整理</h3>
                                <p data-i18n="index.feature.second.subText">JPYCは1 JPYC ＝ 1円で常に購入・使用できる通貨建資産であり、資金決済法上の自家型前払式支払手段です。暗号資産ではありません。一方、イーサリアムの規格であるERC20を採用しているため、イーサリアム（メインネット）上での取引に利用可能です。</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.multichain} id="multichain">
                    <div className={styles.multichain_top}>
                        <div className={styles.multichain_label}>
                            <p data-i18n="index.multichain.label">開発者向け</p>
                        </div>
                        <h3><span data-i18n="index.multichain.mainText.first">JPYCはマルチチェーン対応しており、</span><br class={styles.multichain_br} /><span data-i18n="index.multichain.mainText.second">様々なプロダクトにサポート可能です。</span></h3>
                    </div>
                    <div className={styles.multichain_item}>
                        <ul>
                            <li>
                                <a href="https://etherscan.io/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="_blank"　rel="noopener noreferrer">
                                    <img src={ETHBlack} alt='Ethereumのロゴ' className={styles.multichain_img} id="JPYC" />
                                    <p>Ethereum <br className={styles.multichain_sp_br} />Mainnet</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://explorer-mainnet.maticvigil.com/address/0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c/transactions" target="_blank"　rel="noopener noreferrer">
                                    <img src={Polygon} alt='Ethereumのロゴ' className={styles.multichain_img} id="JPYC" />
                                    <p>Polygon<br />(Matic Network)</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://blockscout.com/xdai/mainnet/address/0x417602f4fbdd471A431Ae29fB5fe0A681964C11b/transactions"　target="_blank"　rel="noopener noreferrer">
                                    <img src={xDai} alt='Ethereumのロゴ' className={styles.multichain_img} id="JPYC" />
                                    <p>xDai</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className={styles.comming_soon}>
                    <div className={styles.soon_text}>coming soon</div>
                    <section className={styles.join} id="join">
                        <div className={styles.inner_join}>
                            <p className={styles.join_text} data-i18n="index.community.subText">JPYCは個人・企業問わず素晴らしい発想力、行動力を持つ方々と日本発のトークンエコシステムの開発とその発展に挑戦します。あなたのアイデアを形にするために、JPYCコミュニティに参加しませんか？</p>
                            <button disabled className={styles.join_button} data-i18n="index.community.button">JPYCコミュニティに応募する</button>
                        </div>
                    </section>
                </div>

                <section className={styles.use}>
                    <p data-i18n="index.useArea.subText">JPYCは常に1 JPYC = 1円で物品との取引をお楽しみいただけます。</p>
                    <Link to="/use">
                        <button data-i18n="index.useArea.button">AmazonでJPYCを使う</button>
                    </Link>
                </section>

                <section className={styles.grant} id="grant">
                    <div className={styles.inner_grant}>
                        <p className={styles.grant_text} data-i18n="index.grant.subText">JPYC Grantは、個人・法人問わずエコシステムへの貢献度に応じて最大 1,000,000 JPYCの支援をします。求められた情報をフォームに入力していただくことで、JPYC Grantの審査が開始します。</p>
                        <Link to="/grant">
                            <button className={styles.grant_button} data-i18n="index.grant.button">JPYCエコシステムに貢献する</button>
                        </Link>
                    </div>
                </section>

                <section className={styles.contact} id="contact">
                    <div className={styles.contact_item}>
                        <p className={styles.contact_title} data-i18n="index.contact.first.title">一般の方へ</p>
                        <div className={styles.contact_center}>
                            <h3 data-i18n="index.contact.first.mainText">なにかお困りのことはありませんか？</h3>
                            <p data-i18n="index.contact.first.subText">JPYCは日本初の試みであり、疑問点がいくつも生まれるかもしれませんが、私たちがサポートいたします。頻度が多いものについては「よくある質問」にまとめますのでもう少々お待ち下さい。</p>
                            <a href="https://jpyc.channel.io/" target="__href"><button data-i18n="index.contact.button">問い合わせる</button></a>
                        </div>
                        <img src={people} className={styles.contact_image} alt="" />
                    </div>
                    <div className={styles.contact_item}>
                        <p className={styles.contact_title} data-i18n="index.contact.second.title">法人の方へ</p>
                        <div className={styles.contact_center}>
                            <h3 data-i18n="index.contact.second.mainText">御社のビジネスをJPYCによって加速させませんか？</h3>
                            <p data-i18n="index.contact.second.subText">JPYCは、適法に発行されているERC20プリペイドコインです。ブロックチェーンを活用した決済、ブロックチェーンを活用した財務健全性の向上や新規ユーザーの獲得などが期待できます。</p>
                            <Link to="/company"><button data-i18n="index.contact.button">問い合わせる</button></Link>
                        </div>
                        <img src={people2} className={styles.contact_image} alt="" />
                    </div>
                </section>

                <div className={styles.comming_soon}>
                    <div className={styles.soon_text}>coming soon</div>
                    <section className={styles.exchange}>
                        <div className={styles.exchange_left}>
                            <h3 className={styles.exchange_left_title} data-i18n="index.swapICB.mainText">JPYCとICBの交換について</h3>
                            <div className={styles.exchange_left_text} data-i18n="index.swapICB.subText">JPYCとICBは1 JPYC = 1 ICBの割合で交換可能です。Gas代のみご負担いただきますが、ICBを既に保有されている方はJPYCに交換することが可能です。</div>
                        </div>
                        <div className={styles.exchange_right}>
                            <button disabled className={styles.exchange_button} data-i18n="index.swapICB.button">ICBをJPYCに交換する</button>
                        </div>
                    </section>
                </div>

                <section className={styles.tax}>
                    <p className={styles.tax_title} data-i18n="index.tax.mainText">暗号資産やJPYCに詳しい税理士はこちら</p>
                    <div className={styles.tax_people}>
                        <img src={ido} className={styles.tax_people_img} alt="Hironori Ido"/>
                        <div className={styles.tax_center}>
                            <p className={styles.tax_name} data-i18n="index.tax.person.first.name">井堂 裕功</p>
                            <p className={styles.tax_description} data-i18n="index.tax.person.first.description">Quantum Accounting株式会社取締役。複数のベンチャー企業と顧問契約を締結し、会計、税務面のアドバイザリー業務を提供している傍ら、暗号資産にかかる会計、税務の検討を日々行なっている。暗号資産による納税も開始。</p>
                        </div>
                        <a href="https://ido-office.com/contact" target="__blank">
                            <button className={styles.tax_button} data-i18n="index.tax.person.button">お問い合わせはこちら</button>
                        </a>
                    </div>
                    <div className={styles.tax_people}>
                        <img src={ohta} className={styles.tax_people_img} alt="Ota Yohei"/>
                        <div className={styles.tax_center}>
                            <p className={styles.tax_name} data-i18n="index.tax.person.second.name">太田 陽平</p>
                            <p className={styles.tax_description} data-i18n="index.tax.person.second.description">大手監査法人で監査業務・M&amp;A関連業務に従事。その後官民ファンドのREVIC（地域経済活性化支援機構）にて中小企業の再生支援業務に従事する。現在は独立し、コンサルティング等を行うほか、ブロックチェーン系ベンチャーの顧問にも就任している。自身も暗号資産を保有しながら、リサーチを継続しており、個人投資家・暗号資産保有企業の目線に立った支援が可能。</p>
                        </div>
                        <a href="https://wakaba-tax.tokyo" target="__blank">
                            <button className={styles.tax_button} data-i18n="index.tax.person.button">お問い合わせはこちら</button>
                        </a>
                    </div>
                    <div className={styles.tax_people}>
                        <img src={hint} className={styles.tax_people_img} alt="member"/>
                        <div className={styles.tax_center}>
                            <p className={styles.tax_description_2} data-i18n="index.tax.wanted.mainText">JPYCでの納税に詳しい税理士を募集しています</p>
                        </div>
                        <Link to="/company">
                            <button className={styles.tax_button} data-i18n="index.tax.wanted.button">運営に連絡する</button>
                        </Link>
                    </div>
                </section>
                
            </main>
            <Footer />
        </>
    )
};

export default index;
