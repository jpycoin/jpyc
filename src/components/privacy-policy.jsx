// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/privacy.css";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const privacy_policy = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <main className="shikn_main">
        <h2 className="privacy-page-title" data-i18n="privacyPolicy.mainText">
          プライバシーポリシー
        </h2>
        <div className="privacy-main">
          <div className="privacy-remarks" data-i18n="privacyPolicy.subText">
            JPYC株式会社（以下、「当社」といいます）は「個人情報保護方針」に基づき個人情報の適切な保護に取り組んでいます。当社が提供するサービス（以下「本サービス」といいます）当社が事業の用に供するために取得し、または保有する個人情報について、本ポリシーを定め以下の通り適切に取り扱います。
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.first.mainText">（1）法令等の遵守</h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.first.subText">
                ・個人情報保護法をはじめとした関係法令・規範を遵守いたします。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.second.mainText">
              （2）お客様から提供される情報
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.second.subText">
                ・氏名（フリガナを含む）、住所、電話番号（携帯電話番号・ファクシミリ番号を含む）、メールアドレス、会社名・団体名、勤務先所在地、その他連絡先に関する情報、ニックネーム、生年月日、性別、ウォレットアドレスなど、お客様から当社に提供される一切の情報
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.third.mainText">
              （3）本サービスの利用に関連して取得される情報
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.third.subText.first">
                ・お客様が当社が提供する商品の入札・購入、プレゼント応募、その他の取引を申し込まれた場合の、お客様を識別できる情報と紐づいた状態での取引履歴に関する情報
              </p>
              <p data-i18n="privacyPolicy.third.subText.second">
                ・当社からのメールマガジンなどの購読状況に関する情報
              </p>
              <p data-i18n="privacyPolicy.third.subText.third">
                ・電話や電子メールその他の手段により、当社に質問した、アンケートやキャンペーンに参加した、掲示板を利用した、又は本サービスを評価するなどを行った場合の、その発言あるいは記載内容に関する情報
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.fourth.mainText">
              （4）アクセスしたことを契機として機械的に取得される情報
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.fourth.subText.first">
                ・お客様のコンピュータがインターネットに接続するときに使用されるIPアドレス、携帯端末の機体識別に関する情報
              </p>
              <p data-i18n="privacyPolicy.fourth.subText.second">
                ・当社の運営するウェブサイトにアクセスしたことを契機として取得された、お使いのブラウザの種類・バージョン、オペレーティングシステム、プラットフォームなどのほか、お客様の閲覧されたページ(URL)、閲覧した日時、表示又は検索された商品などに関する情報
              </p>
              <p data-i18n="privacyPolicy.fourth.subText.third">
                ・上記のほか、クッキー(cookie)やウェブビーコン(web
                beacon)の技術を使用して取得したアクセス
                情報など、お客様が当社の本サービスを利用されるごとに、自動的に収集・保管される情報
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.fifth.mainText">
              （5）取得情報の利用目的
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.fifth.subText.first">
                ・お客様のコンピュータがインターネットに接続するときに使用されるIPアドレス、携帯端末の機体識別に関する情報
              </p>
              <ol>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.first">
                    本サービスに関する各種事項の連絡や情報提供を行うため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.second">
                    本サービスを提供するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.third">
                    お客様のお申込みにかかる本サービス間の情報連携のため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.fourth">
                    電子メール配信サービスのお申し込みの確認やメールを配信するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.fifth">
                    本サービスに関するご購入の確認やお届けをするため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.sixth">
                    本サービスに関するご請求、お支払いとその確認をするため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.seventh">
                    ご協力いただいた調査等に対する謝礼等をお送りするため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.eighth">
                    ご応募いただいた懸賞等に対する景品等をお送りするため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.ninth">
                    本サービスの利用状況等を調査・分析するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.tenth">
                    本サービスの内容をよりご満足いただけるよう改良・改善し、または新サービスの開発のため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.eleventh">
                    本サービスの内容をお客様にあわせてカスタマイズするため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.twelfth">
                    本サービスに関する満足度を調査するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.thirteenth">
                    取得情報を統計的に処理した情報を、集約し調査結果として公表するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.fourteenth">
                    本サービス、新サービスに関する研究開発をするため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.fifteenth">
                    本サービス、新サービスその他の各種サービスのご案内やお知らせをお届けする等、マーケティングで利用するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.sixteenth">
                    調査のご協力依頼や各種イベントへのご参加をお願いしたり、その結果等をご報告するため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.seventeenth">
                    本サービス運営上のトラブルの解決のため
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.fifth.subText.second.eighteenth">
                    本サービスに関する不正利用防止や安全性の確保のため
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.sixth.mainText">
              （6）匿名加工情報の取扱い
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.sixth.subText">
                ・当社は、匿名加工情報の作成および第三者提供する場合、個人情報保護委員会規則で定める基準に従い、安全管理のための措置を講じます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.seventh.mainText">
              （7）安全管理措置
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.seventh.subText">
                ・個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等のリスクに対して適切な安全管理措置を講じます。また、個人情報保護規程、個人情報組織を定め、お客さまの個人情報の適切な管理、保護に努めます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.eighth.mainText">（8）情報の提供</h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.eighth.subText.first">
                ・当社は、お客様の個人情報については、あらかじめユーザーの同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。ただし、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。
              </p>
              <ol>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.first">
                    当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.second">
                    本サービスを提供するために必要な業務の全部または一部を第三者に委託する場合（この場合、当社が委託先へ提供する個人情報は、委託先が業務を遂行するために必要な個人情報に限るものとし、委託先との間で個人情報の取扱いに関する契約を締結し、適切な監督を行います。）
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.third">
                    合併その他の事由による事業の承継に伴って個人情報が提供される場合
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.fourth">
                    提携先または情報収集モジュール提供者へ個人情報が提供される場合
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.fifth">
                    国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.sixth">
                    代理購入における商品発送業務において、発送元（ECサイト等）に対してお客様の個人情報を提供する場合（当社が提供するお客様の個人情報は、氏名（フリガナを含む）、住所、電話番号（携帯電話番号・ファクシミリ番号を含む）、メールアドレス、会社名・団体名、勤務先所在地、その他連絡先に関する情報、ニックネーム、生年月日、性別、ウォレットアドレスなどです。お客様の個人情報は書面、電話、FAXもしくは電子データ等で提供されます。）
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.seventh">
                    ふるさと納税業務に必要な事務等を遂行するために必要な場合（当社は、JPYCふるさと納税利用規約に定めた情報を提供します。）
                  </p>
                </li>
                <li>
                  <p data-i18n="privacyPolicy.eighth.subText.second.eighth">
                    その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められている場合
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.ninth.mainText">（9）安全管理措置</h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.ninth.subText">
                ・個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等のリスクに対して適切な安全管理措置を講じます。また、個人情報保護規程、個人情報組織を定め、お客さまの個人情報の適切な管理、保護に努めます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.tenth.mainText">（10）安全管理措置</h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.tenth.subText">
                ・個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等のリスクに対して適切な安全管理措置を講じます。また、個人情報保護規程、個人情報組織を定め、お客さまの個人情報の適切な管理、保護に努めます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.eleventh.mainText">
              （11）お問い合わせ
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.eleventh.subText.first">
                当社のプライバシーポリシーに関する、ご意見、ご質問、苦情の申出その他ユーザー情報の取扱いに関するお問い合わせは、以下の窓口にご連絡ください。
              </p>
              <br />
              <p data-i18n="privacyPolicy.eleventh.subText.second">
                住所：〒100-0004 東京都千代田区大手町一丁目6番1号 大手町ビル4階
                FINOLAB内
              </p>
              <p data-i18n="privacyPolicy.eleventh.subText.third">
                JPYC株式会社
              </p>
              <p data-i18n="privacyPolicy.eleventh.subText.fourth">
                連絡先：jpyc_support@jcam.co.jp
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="privacyPolicy.twelfth.mainText">
              （12）制定日・改定日
            </h3>
            <div className="privacy-text">
              <p data-i18n="privacyPolicy.twelfth.subText.first">
                制定日：2021年2月2日
              </p>
              <p data-i18n="privacyPolicy.twelfth.subText.second">
                改定日：2021年6月21日
              </p>
              <p data-i18n="privacyPolicy.twelfth.subText.second">
                改定日：2021年9月1日
              </p>
              <p data-i18n="privacyPolicy.twelfth.subText.fourth">
                改定日：2021年10月25日
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default privacy_policy;
