// eslint-disable-next-line

import React, { useState } from "react";
import styles from "../css/Footer.module.css";
import logo from "../image/logo-white.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import uniswap from "../image/uniswap.png";
import github from "../image/github.png";
import facebook from "../image/facebook.png";
import linkedin from "../image/linkedin.png";
import twitter from "../image/twitter.png";
import quickswap from "../image/quickswap.png";
import honeyswap from "../image/honeyswap.svg";
import metamask from "../image/metamask.svg";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Tooltip from "@material-ui/core/Tooltip";
import CopyToClipBoard from "react-copy-to-clipboard";
import coinmarketcap from "../image/coinmarketcap.png";
import medium from "../image/medium.png";
import coingecko from "../image/CoinGecko.png";

const Footer = () => {
  const [openTip_ETH, setOpenTip_ETH] = useState(false);
  const [openTip_Matic, setOpenTip_Matic] = useState(false);
  const [openTip_xDai, setOpenTip_xDai] = useState(false);
  const [openTip_shiden, setOpenTip_shiden] = useState(false);
  const [openTip_avalanche, setOpenTip_avalanche] = useState(false);

  const tokenDecimals = 18;
  const tokenImage = "https://jpyc.jp/static/media/jpyc.0d1e5d3f.png";

  const addToken = async (tokenAddress, tokenSymbol) => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

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
              <p>
                <a
                  href="https://jpyc.co.jp/"
                  target="__blank"
                  className={styles.footer_link}
                >
                  <span data-i18n="footer.companyHp">会社概要（運営会社）</span>
                </a>
              </p>
              <p>
                <span data-i18n="footer.companyAddress">
                  〒100-0004
                  東京都千代田区大手町一丁目6番1号　大手町ビル4階　FINOLAB内
                </span>
              </p>
              <p>
                <a
                  href="https://etherscan.io/address/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53"
                  target="__blank"
                  className={styles.footer_link}
                >
                  Etherscan
                </a>
              </p>
              <p className={styles.contract_address}>
                <span data-i18n="footer.ETHAddress">
                  ETHメインネットコントラクトアドレス
                </span>
                ：<br />
                0x2370f9d504c7a6e775bf6e14b3f12846b594cd53
                <InputAdornment className={styles.copy}>
                  <Tooltip
                    open={openTip_ETH}
                    onClose={() => setOpenTip_ETH(false)}
                    disableHoverListener
                    title="Copied!"
                  >
                    <CopyToClipBoard
                      text={"0x2370f9d504c7a6e775bf6e14b3f12846b594cd53"}
                    >
                      <IconButton onClick={() => setOpenTip_ETH(true)}>
                        <AssignmentIcon color="primary" />
                      </IconButton>
                    </CopyToClipBoard>
                  </Tooltip>
                </InputAdornment>
                <InputAdornment className={styles.copy}>
                  <IconButton
                    onClick={() =>
                      addToken(
                        "0x2370f9d504c7a6e775bf6e14b3f12846b594cd53",
                        "JPYC"
                      )
                    }
                  >
                    <img
                      src={metamask}
                      alt="metamask"
                      className={styles.icon_metamask}
                    />
                  </IconButton>
                </InputAdornment>
              </p>
              <p className={styles.contract_address}>
                <span data-i18n="footer.MaticAddress">
                  Maticコントラクトアドレス
                </span>
                ：<br />
                0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c
                <InputAdornment className={styles.copy}>
                  <Tooltip
                    open={openTip_Matic}
                    onClose={() => setOpenTip_Matic(false)}
                    disableHoverListener
                    title="Copied!"
                  >
                    <CopyToClipBoard
                      text={"0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c"}
                    >
                      <IconButton onClick={() => setOpenTip_Matic(true)}>
                        <AssignmentIcon color="primary" />
                      </IconButton>
                    </CopyToClipBoard>
                  </Tooltip>
                </InputAdornment>
                <InputAdornment className={styles.copy}>
                  <IconButton
                    onClick={() =>
                      addToken(
                        "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
                        "JPYC"
                      )
                    }
                  >
                    <img
                      src={metamask}
                      alt="metamask"
                      className={styles.icon_metamask}
                    />
                  </IconButton>
                </InputAdornment>
              </p>
              <p className={styles.contract_address}>
                <span data-i18n="footer.xDaiAddress">
                  Gnosisコントラクトアドレス
                </span>
                ：<br />
                0x417602f4fbdd471a431ae29fb5fe0a681964c11b
                <InputAdornment className={styles.copy}>
                  <Tooltip
                    open={openTip_xDai}
                    onClose={() => setOpenTip_xDai(false)}
                    disableHoverListener
                    title="Copied!"
                  >
                    <CopyToClipBoard
                      text={"0x417602f4fbdd471a431ae29fb5fe0a681964c11b"}
                    >
                      <IconButton onClick={() => setOpenTip_xDai(true)}>
                        <AssignmentIcon color="primary" />
                      </IconButton>
                    </CopyToClipBoard>
                  </Tooltip>
                </InputAdornment>
                <InputAdornment className={styles.copy}>
                  <IconButton
                    onClick={() =>
                      addToken(
                        "0x417602f4fbdd471a431ae29fb5fe0a681964c11b",
                        "JPYC"
                      )
                    }
                  >
                    <img
                      src={metamask}
                      alt="metamask"
                      className={styles.icon_metamask}
                    />
                  </IconButton>
                </InputAdornment>
              </p>
              <p className={styles.contract_address}>
                <span data-i18n="footer.shidenAddress">
                  Shidenコントラクトアドレス
                </span>
                ：
                <br />
                0x735abe48e8782948a37c7765ecb76b98cde97b0f
                <InputAdornment className={styles.copy}>
                  <Tooltip
                    open={openTip_shiden}
                    onClose={() => setOpenTip_shiden(false)}
                    disableHoverListener
                    title="Copied!"
                  >
                    <CopyToClipBoard
                      text={"0x735abe48e8782948a37c7765ecb76b98cde97b0f"}
                    >
                      <IconButton onClick={() => setOpenTip_shiden(true)}>
                        <AssignmentIcon color="primary" />
                      </IconButton>
                    </CopyToClipBoard>
                  </Tooltip>
                </InputAdornment>
                <InputAdornment className={styles.copy}>
                  <IconButton
                    onClick={() =>
                      addToken(
                        "0x735abe48e8782948a37c7765ecb76b98cde97b0f",
                        "JPYC"
                      )
                    }
                  >
                    <img
                      src={metamask}
                      alt="metamask"
                      className={styles.icon_metamask}
                    />
                  </IconButton>
                </InputAdornment>
              </p>
              <p className={styles.contract_address}>
                <span data-i18n="footer.AvalancheAddress">
                  Avalanche コントラクトアドレス
                </span>
                ：
                <br />
                0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB
                <InputAdornment className={styles.copy}>
                  <Tooltip
                    open={openTip_shiden}
                    onClose={() => openTip_avalanche(false)}
                    disableHoverListener
                    title="Copied!"
                  >
                    <CopyToClipBoard
                      text={"0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB"}
                    >
                      <IconButton onClick={() => setOpenTip_avalanche(true)}>
                        <AssignmentIcon color="primary" />
                      </IconButton>
                    </CopyToClipBoard>
                  </Tooltip>
                </InputAdornment>
                <InputAdornment className={styles.copy}>
                  <IconButton
                    onClick={() =>
                      addToken(
                        "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
                        "JPYC"
                      )
                    }
                  >
                    <img
                      src={metamask}
                      alt="metamask"
                      className={styles.icon_metamask}
                    />
                  </IconButton>
                </InputAdornment>
              </p>
              <p className={styles.icon_wrapper}>
                <a href="https://twitter.com/jpy_coin" target="__blank">
                  <img src={twitter} alt="twitter" className={styles.icon} />
                </a>
                <a
                  href="https://www.facebook.com/japancryptoassetmarket"
                  target="__blank"
                >
                  <img src={facebook} alt="facebook" className={styles.icon} />
                </a>
                <a
                  href="https://www.linkedin.com/company/japancryptoassetmarket/about/"
                  target="__blank"
                >
                  <img src={linkedin} alt="linkedin" className={styles.icon} />
                </a>
                <a href="https://github.com/jpycoin" target="__blank">
                  <img src={github} alt="github" className={styles.icon} />
                </a>
                <a
                  href="https://info.uniswap.org/#/tokens/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53"
                  target="__blank"
                >
                  <img src={uniswap} alt="uniswap" className={styles.icon} />
                </a>
                <a
                  href="https://info.quickswap.exchange/token/0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c"
                  target="__blank"
                >
                  <img
                    src={quickswap}
                    alt="quickswap"
                    className={styles.icon}
                  />
                </a>
                <a
                  href="https://info.honeyswap.org/token/0x417602f4fbdd471a431ae29fb5fe0a681964c11b"
                  target="__blank"
                >
                  <img
                    src={honeyswap}
                    alt="honeyswap"
                    className={styles.icon}
                  />
                </a>
                <a
                  href="https://coinmarketcap.com/currencies/jpycoin/"
                  target="__blank"
                >
                  <img
                    src={coinmarketcap}
                    alt="coinmarketcap"
                    className={`${styles.icon} ${styles.icon}`}
                  />
                </a>
                <a href="https://medium.com/@jpyc-blog" target="__blank">
                  <img
                    src={medium}
                    alt="medium"
                    className={`${styles.icon} ${styles.icon}`}
                  />
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/jpy-coin"
                  target="__blank"
                >
                  <img
                    src={coingecko}
                    alt="coingecko"
                    className={`${styles.icon} ${styles.icon}`}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.inner_side2}>
            <div>
              <p>
                <HashLink
                  className={styles.footer_right_item}
                  to="/#feature"
                  data-i18n="common.JPYCIs"
                >
                  JPYCとは
                </HashLink>
              </p>
              <p>
                <a
                  href="https://app.jpyc.jp/"
                  className={styles.footer_right_item}
                >
                  JPYC Apps
                </a>
              </p>
              <p>
                <a
                  href="https://blog.jpyc.jp/"
                  target="__blank"
                  className={styles.footer_right_item}
                >
                  JPYCブログ 
                </a>
              </p>
              <p>
                <HashLink
                  className={styles.footer_right_item}
                  to="/#newsletter"
                  data-i18n="common.newsletter"
                >
                  ニュースレター
                </HashLink>
              </p>
              <p>
                <HashLink
                  className={styles.footer_right_item}
                  to="/#grant"
                  data-i18n="common.grant"
                >
                  JPYC Grant
                </HashLink>
              </p>
              <p>
                <HashLink
                  className={styles.footer_right_item}
                  to="/#contact"
                  data-i18n="common.contact"
                >
                  お問い合わせ
                </HashLink>
              </p>
              <p>
                <a
                  href="https://blog.jpyc.jp/"
                  className={styles.footer_right_item}
                  data-i18n="footer.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JPYCブログ
                </a>
              </p>
              <p>
                <Link
                  to="/member"
                  className={styles.footer_right_item}
                  data-i18n="footer.member"
                >
                  メンバー
                </Link>
              </p>
              <p>
                <a
                  href="/white-paper.pdf"
                  target="__blank"
                  className={styles.footer_right_item}
                  data-i18n="footer.jaWP"
                >
                  ホワイトペーパー（日本語）
                </a>
              </p>
              <p>
                <a
                  href="/white-paper-en.pdf"
                  target="__blank"
                  className={styles.footer_right_item}
                  data-i18n="footer.enWP"
                >
                  White-Paper (English)
                </a>
              </p>
              <p>
                <a
                  href="https://jpyc.gitbook.io/jpyc/jpyc/hajimeni"
                  target="__blank"
                  className={styles.footer_right_item}
                  data-i18n="footer.FAQ"
                >
                  JPYC についてよくあるご質問（FAQ）
                </a>
              </p>
              <p>
                <Link
                  to="/prevention"
                  className={styles.footer_right_item}
                  data-i18n="footer.fraudPrevention"
                >
                  不正利用防止に関するご協力のお願い
                </Link>
              </p>
              <p>
                <Link
                  to="/shikin_kessai"
                  className={styles.footer_right_item}
                  data-i18n="footer.PaymentServicesAct"
                >
                  資金決済法に基づく表示
                </Link>
              </p>
              <p>
                <Link
                  to="/law/gift"
                  className={styles.footer_right_item}
                  data-i18n="footer.SpecifiedCommercialTransactionAct1"
                >
                  特定商取引法に基づく表示（JPYCギフト交換）
                </Link>
              </p>
              <p>
                <Link
                  to="/law/shopping"
                  className={styles.footer_right_item}
                  data-i18n="footer.SpecifiedCommercialTransactionAct2"
                >
                  特定商取引法に基づく表示（JPYCショッピング）
                </Link>
              </p>
              <p>
                <Link
                  to="/law/shop"
                  className={styles.footer_right_item}
                  data-i18n="footer.SpecifiedCommercialTransactionAct3"
                >
                  特定商取引法に基づく表示（JPYC販売所）
                </Link>
              </p>
              <p>
                <Link
                  to="/law/matsuya_ginza"
                  className={styles.footer_right_item}
                  data-i18n="footer.SpecifiedCommercialTransactionAct4"
                >
                  特定商取引法に基づく表示（松屋銀座）
                </Link>
              </p>
              <p>
                <Link
                  to="/law/giftee"
                  className={styles.footer_right_item}
                  data-i18n="footer.SpecifiedCommercialTransactionAct5"
                >
                  特定商取引法に基づく表示（giftee Box交換）
                </Link>
              </p>
              <p>
                <Link
                  to="/privacy-policy"
                  className={styles.footer_right_item}
                  data-i18n="footer.PrivacyPolicy"
                >
                  プライバシーポリシー
                </Link>
              </p>
              <p>
                <Link
                  to="/terms"
                  className={styles.footer_right_item}
                  data-i18n="footer.Terms"
                >
                  JPYC利用規約
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        <small>&copy; 2021 JPYC Inc.</small>
      </p>
    </footer>
  );
};

export default Footer;
