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
                    <div className="privacy-remarks" data-i18n="privacyPolicy.subText">当社では「個人情報保護方針」に基づき個人情報の適切な保護に取り組んでいます。当社が事業の用に供するために取得し、または保有する個人情報について、本規定（以下「本ポリシー」と言います。）を定め以下の通り適切に取り扱います。</div>
                    <div>
                        <h3 data-i18n="privacyPolicy.first.mainText">（1）お客様から提供される情報</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.first.subText">・氏名（フリガナを含む）、住所、電話番号（携帯電話番号・ファクシミリ番号を含む）、電子メールアドレス、携帯メールアドレス、会社名・団体名、勤務先所在地、その他連絡先に関する情報、ニックネーム、生年月日、性別など、お客様から当社に提供される一切の情報</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.second.mainText">（2）本サービスの利用に関連して取得される情報</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.second.subText.first">・お客様が当社が提供する商品の入札・購入、プレゼント応募、その他の取引を申し込まれた場合の、お客様を識別できる情報と紐づいた状態での取引履歴に関する情報</p>
                            <p data-i18n="privacyPolicy.second.subText.second">・当社からのメールマガジンなどの購読状況に関する情報</p>
                            <p data-i18n="privacyPolicy.second.subText.third">・電話や電子メールその他の手段により、当社に質問した、アンケートやキャンペーンに参加した、掲示板を利用した、又は本サービスを評価するなどを行った場合の、その発言あるいは記載内容に関する情報</p>
                        </div>
                    </div>
                    <div>
                        <h3 data-i18n="privacyPolicy.third.mainText">（3）アクセスしたことを契機として機械的に取得される情報</h3>
                        <div className="privacy-text">
                            <p data-i18n="privacyPolicy.third.subText.first">・お客様のコンピュータがインターネットに接続するときに使用されるIPアドレス、携帯端末の機体識別に関する情報</p>
                            <p data-i18n="privacyPolicy.third.subText.second">・当社の運営するウェブサイトにアクセスしたことを契機として取得された、お使いのブラウザの種類・バージョン、オペレーティングシステム、プラットフォームなどのほか、お客様の閲覧されたページ(URL)、閲覧した日時、表示又は検索された商品などに関する情報</p>
                            <p data-i18n="privacyPolicy.third.subText.third">・上記のほか、クッキー(cookie)やウェブビーコン(web beacon)の技術を使用して取得したアクセス 情報など、お客様が当社の本サービスを利用されるごとに、自動的に収集・保管される情報</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
