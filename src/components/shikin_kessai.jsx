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
                <h2 className="page-title">資金決済法に基づく表示</h2>
                <table className="shikin_table">
                    <tr>
                        <th>前払式支払手段の名称</th>
                        <td>JPY Coin（単位：JPYC）</td>
                    </tr>
                    <tr>
                        <th>発行事業者</th>
                        <td>日本暗号資産市場株式会社</td>
                    </tr>
                    <tr>
                        <th>支払可能金額等</th>
                        <td>上限はございません。</td>
                    </tr>
                    <tr>
                        <th>有効期間</th>
                        <td>期限はありません。</td>
                    </tr>
                    <tr>
                        <th>お問い合わせ先</th>
                        <td>
                            日本暗号資産市場株式会社<br />所在地：〒105-0011 東京都港区芝公園4-8-12 猫来坊2階<br />
                            <Link to="/company">法人の方</Link><br />
                            <Link to="/individual">一般の方</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>使用場所</th>
                        <td>
                            <a href="https://www.amazon.co.jp/" target="__blank">Amazon</a>などECサイトで販売されている商品を当社にて代理購入することができます。商品ご購入は<Link to="/use">こちら</Link>をご覧ください。
                        </td>
                    </tr>
                    <tr>
                        <th>利用上の注意</th>
                        <td>・原則として JPYC の払戻しはいたしません。<br />
                            但し、当社が有償ポイントサービスの提供を終了（廃止）する場合は、この限りではありません。この場合、払戻し実施時に有効に残存するJPYCを、1 JPYC = 1 円に基づいて日本円で計算した額を払い戻します。<br />
                            ・１JPYCあたりの二次流通価格は、為替や経済情勢の影響等により、変動する可能性があります。
                        </td>
                    </tr>
                    <tr>
                        <th>未使用残高の確認方法</th>
                        <td><a href="https://etherscan.io/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="__blank">Etherscan</a>または、ご自身のウォレット（<a href="https://metamask.io/" target="__blank">metamask</a>など）よりご確認できます。</td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
