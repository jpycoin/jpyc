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
                <h2 className="page-title">特定商取引法に基づく表示</h2>
                <table className="shikin_table">
                    <tr>
                        <th>販売業者名</th>
                        <td>日本暗号資産市場株式会社</td>
                    </tr>
                    <tr>
                        <th>所在地</th>
                        <td>〒105-0011 東京都港区芝公園4-8-12 猫来坊2階</td>
                    </tr>
                    <tr>
                        <th>電話番号</th>
                        <td>07041054162</td>
                    </tr>
                    <tr>
                        <th>電話応対時間</th>
                        <td>電話応対時間	平日　午前10時～午後7時00分まで（年末・年始を除く）<br />※受付時間外の場合は、メールにてお問い合わせください。</td>
                    </tr>
                    <tr>
                        <th>メールアドレス</th>
                        <td>admin@jcam.co.jp</td>
                    </tr>
                    <tr>
                        <th>代表者</th>
                        <td>代表取締役社長 岡部典孝</td>
                    </tr>
                    <tr>
                        <th>お問い合わせ</th>
                        <td>
                            <Link to="/company">法人の方</Link><br />
                            <Link to="/individual">一般の方</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>ウェブサイトURL</th>
                        <td>https://jpyc.jp</td>
                    </tr>
                    <tr>
                        <th>申込みの有効期限</th>
                        <td>このウェブサイトが表示されている限り</td>
                    </tr>
                    <tr>
                        <th>お支払い方法</th>
                        <td>クレジットカード</td>
                    </tr>
                    <tr>
                        <th>商品代金以外の必要料金</th>
                        <td>・銀行振込手数料<br />
                        {/* ・仮想通貨決済時のGAS代（送信手数料） */}
                        </td>
                    </tr>
                    <tr>
                        <th>お支払い金額について</th>
                        <td>・銀行振込の場合<br />
表示価格 + 振込手数料のお支払いになります。<br />
{/* ・クレジットカード決済の場合<br />
表示価格のみのお支払いになります。<br />
・仮想通貨決済の場合<br />
表示価格 + GAS代（送信手数料）のお支払いになります。<br /> */}
<br />
※JPYCをお客様に送金する際のGAS代（送信手数料）は頂いておりません。<br />
※JPYCは前払式支払手段のため非課税です。</td>
                    </tr>
                    <tr>
                        <th>引き渡し期間</th>
                        <td>お客様のご入金を確認後、翌営業日までにご指定のETHアドレス宛に送金致します。</td>
                    </tr>
                    <tr>
                        <th>返品について</th>
                        <td>返品不可</td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
