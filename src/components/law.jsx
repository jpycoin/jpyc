// eslint-disable-next-line

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../css/shikin.css';

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
            <main className="shikin_main">
                <h2 className="page-title" data-i18n="law.mainText">特定商取引法に基づく表示</h2>
                <table className="shikin_table">
                    <tr>
                        <th data-i18n="law.table.first.left">販売業者名</th>
                        <td data-i18n="law.table.first.right">JPYC株式会社</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.second.left">所在地</th>
                        <td data-i18n="law.table.second.right">〒105-0011 東京都港区芝公園4-8-12 猫来坊2階</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.third.left">電話番号</th>
                        <td data-i18n="law.table.third.right">070-4105-4162</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.fourth.left">電話応対時間</th>
                        <td><span data-i18n="law.table.fourth.right.first">平日　午前10時～午後7時00分まで（年末・年始を除く）</span><br /><span data-i18n="law.table.fourth.right.second">※受付時間外の場合は、メールにてお問い合わせください。</span></td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.fifth.left">メールアドレス</th>
                        <td>admin@jcam.co.jp</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.sixth.left">代表者</th>
                        <td data-i18n="law.table.sixth.right">代表取締役社長 岡部典孝</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.seventh.left">お問い合わせ</th>
                        <td>
                            <Link to="/company" data-i18n="law.table.seventh.right.first">法人の方</Link><br />
                            <Link to="/individual" data-i18n="law.table.seventh.right.second">一般の方</Link>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.eighth.left">ウェブサイトURL</th>
                        <td>https://jpyc.jp</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.ninth.left">申込みの有効期限</th>
                        <td data-i18n="law.table.ninth.right">このウェブサイトが表示されている限り</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.tenth.left">お支払い方法</th>
                        <td data-i18n="law.table.tenth.right">クレジットカード</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.eleventh.left">商品代金以外の必要料金</th>
                        <td data-i18n="law.table.eleventh.right">・銀行振込手数料<br />
                        {/* ・仮想通貨決済時のGAS代（送信手数料） */}
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.twelfth.left">お支払い金額について</th>
                        <td><span data-i18n="law.table.twelfth.right.first">・銀行振込の場合</span><br />
                            <span data-i18n="law.table.twelfth.right.second">表示価格 + 振込手数料のお支払いになります。</span><br />
                            {/* ・クレジットカード決済の場合<br />
                            表示価格のみのお支払いになります。<br />
                            ・仮想通貨決済の場合<br />
                            表示価格 + GAS代（送信手数料）のお支払いになります。<br /> */}
                            <br />
                            <span data-i18n="law.table.twelfth.right.third">※JPYCをお客様に送金する際のGAS代（送信手数料）は頂いておりません。</span><br />
                            <span data-i18n="law.table.twelfth.right.fourth">※JPYCは前払式支払手段のため非課税です。</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.thirteenth.left">引き渡し期間</th>
                        <td data-i18n="law.table.thirteenth.right">お客様のご入金を確認後、翌営業日までにご指定のETHアドレス宛に送金致します。</td>
                    </tr>
                    <tr>
                        <th data-i18n="law.table.fourteenth.left">返品について</th>
                        <td data-i18n="law.table.fourteenth.right">返品不可</td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
