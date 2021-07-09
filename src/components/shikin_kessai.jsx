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
                <h2 className="page-title" data-i18n="shikinKessai.mainText">資金決済法に基づく表示</h2>
                <table className="shikin_table">
                    <tr>
                        <th data-i18n="shikinKessai.table.first.left">前払式支払手段の名称</th>
                        <td data-i18n="shikinKessai.table.first.right">JPY Coin（単位：JPYC）</td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.second.left">発行事業者</th>
                        <td data-i18n="shikinKessai.table.second.right">JPYC株式会社</td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.third.left">支払可能金額等</th>
                        <td>
                            <span data-i18n="shikinKessai.table.third.right.first">1JPYCは、1円に相当します。</span><br /><br />
                            <span data-i18n="shikinKessai.table.third.right.second">保有できる上限はありません</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.fourth.left">有効期間</th>
                        <td data-i18n="shikinKessai.table.fourth.right">期限はありません。</td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.fifth.left">お問い合わせ先</th>
                        <td>
                            <span data-i18n="shikinKessai.table.fifth.right.first">JPYC株式会社</span><br /><span data-i18n="shikinKessai.table.fifth.right.second">所在地：〒105-0011 東京都港区芝公園4-8-12 猫来坊2階</span><br />
                            <Link to="/company" data-i18n="shikinKessai.table.fifth.right.third">法人の方</Link><br />
                            <a href="https://jpyc.channel.io/" target="_blank" rel="noopener noreferrer" data-i18n="shikinKessai.table.fifth.right.fourth">一般の方</a>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.sixth.left">使用場所</th>
                        <td>
                            <span data-i18n="shikinKessai.table.sixth.right.first"></span>
                            <br /><br />
                            <span data-i18n="shikinKessai.table.sixth.right.second"></span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.seventh.left">利用上の注意</th>
                        <td>
                            <span data-i18n="shikinKessai.table.seventh.right.first">・資金決済に関する法律に基づき払戻しが認められる場合を除き、払戻しはできません。</span><br /><br />
                            <span data-i18n="shikinKessai.table.seventh.right.second">・現在、JPYCは、UniswapやQuickswapを始めとした分散型取引所（以下、DEX）において取引をされていますが、当社は、DEXの運営に一切関与しておらず、二次流通価格を何ら保証するものではありません。</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.eighth.left">未使用残高の確認方法</th>
                        <td><span data-i18n="shikinKessai.table.eighth.right.first"></span><a href="https://etherscan.io/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="__blank">Etherscan</a><span data-i18n="shikinKessai.table.eighth.right.second">または、ご自身のウォレット（</span><a href="https://metamask.io/" target="__blank">metamask</a><span data-i18n="shikinKessai.table.eighth.right.third">など）よりご確認できます。</span></td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.ninth.left"></th>
                        <td><Link to="/privacy-policy"><span data-i18n="shikinKessai.table.ninth.right"></span></Link></td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
