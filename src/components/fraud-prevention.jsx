// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/prevention.css";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const Prevention = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <main className="prevention_main">
        <div className="prevention-main">
          <div className="prevention-head">
            <p className="prevention-date" data-i18n="prevention.date">
              2021年9月
            </p>
            <p className="prevention-company" data-i18n="prevention.com">
              JPYC株式会社
            </p>
          </div>
          <h2 className="prevention-page-title" data-i18n="prevention.mainText">
            JPYC利用規約
          </h2>
          <p className="prevention-text-first" data-i18n="prevention.first">
            日頃は多大なるご愛顧を賜り、誠にありがとうございます。
          </p>
          <p className="prevention-text-first" data-i18n="prevention.second">
            おかげさまで、JPYCは、2021年1月27日のリリース以来、日本初のERC20日本円連動ステーブルコインとして、大変ご好評いただいております。
          </p>
          <p className="prevention-text-first" data-i18n="prevention.third">
            暗号資産交換業などでは厳格なKYC（Know Your
            Customer）を求められていますが、JPYCは、前払式支払手段であるため、法律上、KYCは求められていません。
          </p>
          <p className="prevention-text-first" data-i18n="prevention.fourth">
            KYCなくお気軽にご利用いただけることが、JPYCがご好評いただいている魅力のひとつであると考えております。
          </p>
          <p className="prevention-text-first" data-i18n="prevention.fifth">
            しかしながら、今後、より多くの方に、JPYCを安全安心にご利用いただけるよう、自主的に、高額な取引などにつきましては、不正利用防止のために最低限必要な確認等を実施させていただきます。なお、どのような場合に、どのように確認等を実施するかにつきましては、セキュリティの観点から、公表は差し控えさせていただきます。
          </p>
          <p className="prevention-text-first" data-i18n="prevention.sixth">
            ユーザーのみなさまには、ご不便をお掛けしますが、ご理解ご協力の程、何卒よろしくお願い申し上げます。
          </p>
          <p className="prevention-text-first" data-i18n="prevention.seventh">
            引き続き、JPYCが、日本を代表する前払式支払手段扱いの日本円連動ステーブルコインとなるため、業界をリードできるよう、行政や金融機関とのコミュニケーションを密に取り、不正利用防止に取り組んで参ります。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Prevention;
