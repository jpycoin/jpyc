// eslint-disable-next-line

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../css/privacy.css';

class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}

const shikin_kessai = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <Header />
            <main className="shikn_main">
                <h2 className="privacy-page-title" data-i18n="privacyPolicy.mainText">プライバシーポリシー</h2>
                <div className="privacy-main">
                    <div className="privacy-remarks" data-i18n="privacyPolicy.subText">JPYC株式会社（以下、「当社」といいます）は「個人情報保護方針」に基づき個人情報の適切な保護に取り組んでいます。当社が提供するサービス（以下「本サービス」といいます）当社が事業の用に供するために取得し、または保有する個人情報について、本ポリシーを定め以下の通り適切に取り扱います。</div>
                    <div>
                        <h3 data-i18n="privacyPolicy.first.mainText">（1）法令等の遵守</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.first.subText">・氏名（フリガナを含む）、住所、電話番号（携帯電話番号・ファクシミリ番号を含む）、電子メールアドレス、携帯メールアドレス、会社名・団体名、勤務先所在地、その他連絡先に関する情報、ニックネーム、生年月日、性別など、お客様から当社に提供される一切の情報</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.second.mainText">（2）お客様から提供される情報</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.second.subText">・氏名（フリガナを含む）、住所、電話番号（携帯電話番号・ファクシミリ番号を含む）、メールアドレス、会社名・団体名、勤務先所在地、その他連絡先に関する情報、ニックネーム、生年月日、性別、ウォレットアドレスなど、お客様から当社に提供される一切の情報</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.third.mainText">（3）本サービスの利用に関連して取得される情報</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.third.subText.first">・お客様が当社が提供する商品の入札・購入、プレゼント応募、その他の取引を申し込まれた場合の、お客様を識別できる情報と紐づいた状態での取引履歴に関する情報</p>
                            <p data-i18n="privacyPolicy.third.subText.second">・当社からのメールマガジンなどの購読状況に関する情報</p>
                            <p data-i18n="privacyPolicy.third.subText.third">・電話や電子メールその他の手段により、当社に質問した、アンケートやキャンペーンに参加した、掲示板を利用した、又は本サービスを評価するなどを行った場合の、その発言あるいは記載内容に関する情報</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.fourth.mainText">（4）アクセスしたことを契機として機械的に取得される情報</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.fourth.subText.first">・お客様のコンピュータがインターネットに接続するときに使用されるIPアドレス、携帯端末の機体識別に関する情報</p>
                            <p data-i18n="privacyPolicy.fourth.subText.second">・当社の運営するウェブサイトにアクセスしたことを契機として取得された、お使いのブラウザの種類・バージョン、オペレーティングシステム、プラットフォームなどのほか、お客様の閲覧されたページ(URL)、閲覧した日時、表示又は検索された商品などに関する情報</p>
                            <p data-i18n="privacyPolicy.fourth.subText.third">・上記のほか、クッキー(cookie)やウェブビーコン(web beacon)の技術を使用して取得したアクセス 情報など、お客様が当社の本サービスを利用されるごとに、自動的に収集・保管される情報</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.fifth.mainText">（5）取得情報の利用目的</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.fifth.subText.first">・お客様のコンピュータがインターネットに接続するときに使用されるIPアドレス、携帯端末の機体識別に関する情報</p>
                            <ol>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.first"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.second"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.third"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.fourth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.fifth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.sixth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.seventh"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.eighth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.ninth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.tenth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.eleventh"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.twelfth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.thirteenth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.fourteenth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.fifteenth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.sixteenth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.seventeenth"></p></li>
                                <li><p data-i18n="privacyPolicy.fifth.subText.second.eighteenth"></p></li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.sixth.mainText">（6）匿名加工情報の取扱い</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.sixth.subText">・当社は、匿名加工情報の作成および第三者提供する場合、個人情報保護委員会規則で定める基準に従い、安全管理のための措置を講じます。</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.seventh.mainText">（7）安全管理措置</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.seventh.subText">・個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等のリスクに対して適切な安全管理措置を講じます。また、個人情報保護規程、個人情報組織を定め、お客さまの個人情報の適切な管理、保護に努めます。</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.eighth.mainText">（8）情報の提供</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.eighth.subText.first">・当社は、お客様の個人情報については、あらかじめユーザーの同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。ただし、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。</p>
                            <ol>
                                <li><p data-i18n="privacyPolicy.eighth.subText.second.first"></p></li>
                                <li><p data-i18n="privacyPolicy.eighth.subText.second.second"></p></li>
                                <li><p data-i18n="privacyPolicy.eighth.subText.second.third"></p></li>
                                <li><p data-i18n="privacyPolicy.eighth.subText.second.fourth"></p></li>
                                <li><p data-i18n="privacyPolicy.eighth.subText.second.fifth"></p></li>
                                <li><p data-i18n="privacyPolicy.eighth.subText.second.sixth"></p></li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.ninth.mainText">（9）安全管理措置</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.ninth.subText">・個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等のリスクに対して適切な安全管理措置を講じます。また、個人情報保護規程、個人情報組織を定め、お客さまの個人情報の適切な管理、保護に努めます。</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.tenth.mainText">（10）安全管理措置</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.tenth.subText">・個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等のリスクに対して適切な安全管理措置を講じます。また、個人情報保護規程、個人情報組織を定め、お客さまの個人情報の適切な管理、保護に努めます。</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.eleventh.mainText">（11）お問い合わせ</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.eleventh.subText.first">当社のプライバシーポリシーに関する、ご意見、ご質問、苦情の申出その他ユーザー情報の取扱いに関するお問い合わせは、以下の窓口にご連絡ください。</p>
                            <br />
                            <p data-i18n="privacyPolicy.eleventh.subText.second">住所：東京都港区芝公園4-8-12 猫来坊2階</p>
                            <p data-i18n="privacyPolicy.eleventh.subText.third">JPYC株式会社</p>
                            <p data-i18n="privacyPolicy.eleventh.subText.fourth">連絡先：jpyc_support@jcam.co.jp</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.twelfth.mainText">（12）制定日・改定日</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.twelfth.subText.first">制定日：2021年2月2日</p>
                            <p data-i18n="privacyPolicy.twelfth.subText.second">改定日：2021年6月21日</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
