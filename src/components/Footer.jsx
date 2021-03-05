// eslint-disable-next-line

import React from 'react';
import styles from '../css/Footer.module.css';
import logo from '../image/logo-white.png';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import uniswap from '../image/uniswap.png';
import github from '../image/github.png';
import facebook from '../image/facebook.png';
import linkedin from '../image/linkedin.png';
import twitter from '../image/twitter.png';
import quickswap from '../image/quickswap.png';
import honeyswap from '../image/honeyswap.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.side}>
                    <div className={styles.inner_side1}>
                        <div>
                            <p className={styles.img_p}>
                                <Link to="/">
                                    <img src={logo} alt="ロゴ" className={styles.logo} />
                                </Link>
                            </p>
                            <p>105-0011<br />東京都港区芝公園4-8-12 猫来坊2階</p>
                            <p><a href="https://etherscan.io/address/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="__blank" className={styles.footer_link}>Etherscan</a></p>
                            <p><a href="https://note.com/ocurima/m/mf80a9d72984a" target="__blank" className={styles.footer_link}>JPYC Magazine</a></p>
                            <p className={styles.contract_address}>コントラクトアドレス：<br />0x2370f9d504c7a6e775bf6e14b3f12846b594cd53</p>
                            <p className={styles.icon_wrapper}>
                                <a href="https://twitter.com/jpy_coin"  target="__blank">
                                    <img src={twitter} alt="twitter" className={styles.icon} />
                                </a>
                                <a href="https://www.facebook.com/japancryptoassetmarket" target="__blank">
                                    <img src={facebook} alt="facebook" className={styles.icon} />
                                </a>
                                <a href="https://www.linkedin.com/company/japancryptoassetmarket/about/" target="__blank">
                                    <img src={linkedin} alt="linkedin" className={styles.icon} />
                                </a>
                                <a href="https://github.com/jpycoin" target="__blank">
                                    <img src={github} alt="github" className={styles.icon} />
                                </a>
                                <a href="https://info.uniswap.org/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="__blank">
                                    <img src={uniswap} alt="uniswap" className={styles.icon}/>
                                </a>
                                <a href="https://info.quickswap.exchange/token/0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c" target="__blank">
                                    <img src={quickswap} alt="uniswap" className={styles.icon}/>
                                </a>
                                <a href="https://info.honeyswap.org/token/0x417602f4fbdd471a431ae29fb5fe0a681964c11b" target="__blank">
                                    <img src={honeyswap} alt="uniswap" className={styles.icon}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.side}>
                    <div className={styles.inner_side2}>
                        <div>
                            <p>
                                <HashLink className={styles.footer_right_item} to="/#feature">JPYCとは</HashLink>
                            </p>
                            <p>
                                <HashLink className={styles.footer_right_item} to="/#join">コミュニティ</HashLink>
                            </p>
                            <p> 
                                <HashLink className={styles.footer_right_item} to="/#contact">お問い合わせ</HashLink>
                            </p>
                            <p>
                                <HashLink to="/use" className={styles.footer_right_item}>JPYCを使う</HashLink>
                            </p>
                            <p>
                                <Link to="/buy" className={styles.footer_right_item}>JPYCを購入する</Link>
                            </p>
                            <p>
                                <Link to="/member" className={styles.footer_right_item}>メンバー</Link>
                            </p>
                            <p>
                                <a href="./white-paper.pdf" target="__blank"　className={styles.footer_right_item}>ホワイトペーパー（日本語）</a>
                            </p>
                            <p>
                                <a href="./white-paper-en.pdf" target="__blank"　className={styles.footer_right_item}>White-Paper（English）</a>
                            </p>
                            <p>
                                <a href="./jip.pdf" target="__blank"　className={styles.footer_right_item}>JPYC-インセンティブ提供プログラム（JIP）</a>
                            </p>
                            <p>
                                <a href="./faq.pdf" target="__blank"　className={styles.footer_right_item}>JPYC についてよくあるご質問（FAQ）</a>
                            </p>
                            <br />
                            <p>
                                <Link to="shikin_kessai"　className={styles.footer_right_item}>資金決済法に基づく表示</Link>
                            </p>
                            <p>
                                <Link to="law" className={styles.footer_right_item}>特定商取引法に基づく表示</Link>
                            </p>
                            <p>
                                <Link to="privacy-policy" className={styles.footer_right_item}>プライバシーポリシー</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p><small>&copy; 2021 Japan Crypto Asset Market Inc.</small></p>
        </footer>
    );
};

export default Footer;
