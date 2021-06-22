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
                        <td data-i18n="shikinKessai.table.second.right">日本暗号資産市場株式会社</td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.third.left">支払可能金額等</th>
                        <td data-i18n="shikinKessai.table.third.right">上限はございません。</td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.fourth.left">有効期間</th>
                        <td data-i18n="shikinKessai.table.fourth.right">期限はありません。</td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.fifth.left">お問い合わせ先</th>
                        <td>
                            <span data-i18n="shikinKessai.table.fifth.right.first">日本暗号資産市場株式会社</span><br /><span data-i18n="shikinKessai.table.fifth.right.second">所在地：〒105-0011 東京都港区芝公園4-8-12 猫来坊2階</span><br />
                            <Link to="/company" data-i18n="shikinKessai.table.fifth.right.third">法人の方</Link><br />
                            <a href="https://jpyc.channel.io/" target="_blank" rel="noopener noreferrer" data-i18n="shikinKessai.table.fifth.right.fourth">一般の方</a>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.sixth.left">使用場所</th>
                        <td>
                            <span data-i18n="shikinKessai.table.sixth.right.first"></span><span data-i18n="shikinKessai.table.sixth.right.second">ECサイトで販売されている商品を当社にて代理購入することができます。商品ご購入は</span><Link to="/use" data-i18n="shikinKessai.table.sixth.right.third">こちら</Link><span data-i18n="shikinKessai.table.sixth.right.fourth">をご覧ください。</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.seventh.left">利用上の注意</th>
                        <td><span data-i18n="shikinKessai.table.seventh.right.first">・原則として JPYC の払戻しはいたしません。</span><br />
                            <span data-i18n="shikinKessai.table.seventh.right.second">但し、当社が有償ポイントサービスの提供を終了（廃止）する場合は、この限りではありません。この場合、払戻し実施時に有効に残存するJPYCを、1 JPYC = 1 円に基づいて日本円で計算した額を払い戻します。</span><br />
                            <span data-i18n="shikinKessai.table.seventh.right.third">・１JPYCあたりの二次流通価格は、為替や経済情勢の影響等により、変動する可能性があります。</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.eighth.left">未使用残高の確認方法</th>
                        <td><span data-i18n="shikinKessai.table.eighth.right.first"></span><a href="https://etherscan.io/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="__blank">Etherscan</a><span data-i18n="shikinKessai.table.eighth.right.second">または、ご自身のウォレット（</span><a href="https://metamask.io/" target="__blank">metamask</a><span data-i18n="shikinKessai.table.eighth.right.third">など）よりご確認できます。</span></td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
