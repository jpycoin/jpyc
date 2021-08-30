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
                            <span data-i18n="shikinKessai.table.fifth.right.first">JPYC株式会社</span><br /><br />
                            <span data-i18n="shikinKessai.table.fifth.right.second">所在地：〒105-0011 東京都港区芝公園4-8-12 猫来坊</span><br /><br />
                            <Link to="/company" data-i18n="shikinKessai.table.fifth.right.third">法人の方</Link><br />
                            <a href="https://jpyc.channel.io/" target="_blank" rel="noopener noreferrer" data-i18n="shikinKessai.table.fifth.right.fourth">一般の方</a>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.sixth.left">使用場所</th>
                        <td>
                            <span data-i18n="shikinKessai.table.sixth.right.first">JPYC Apps(https://app.jpyc.jp/)のサイト内で使用することができます。</span>
                            <br /><br />
                            <span data-i18n="shikinKessai.table.sixth.right.second">（主な用途：ECサイトで販売されている商品を当社にて代理購入する際の支払い・ギフト券との交換・ふるさと納税等）</span>
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
                        <td><Link to="/privacy-policy"><span data-i18n="shikinKessai.table.ninth.right">JPYC利用規約及びプライバシーポリシーをご確認ください。</span></Link></td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.tenth.left">資金決済法第１４条第１項の規定の趣旨</th>
                        <td><span data-i18n="shikinKessai.table.tenth.right">前払式支払手段の保有者の保護のための制度として、資金決済に関する法律の規定に基づき、前払式支払手段の毎年３月３１日及び９月３０日現在の未使用残高の半額以上の額の発行保証金を法務局等に供託等することにより資産保全が義務付けられております。</span></td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.eleventh.left">資金決済法第３１条第１項に規定する権利の内容</th>
                        <td><span data-i18n="shikinKessai.table.eleventh.right">万が一の場合、前払式支払手段の保有者は、資金決済に関する法律第３１条の規定に基づき、あらかじめ保全された発行保証金について、他の債権者に先立ち弁済を受けることができます。</span></td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.twelfth.left">発行保証金の供託、発行保証金保全契約又は発行保証金信託契約の別</th>
                        <td>
                            <span data-i18n="shikinKessai.table.twelfth.right.first">当社の利用者資金の保全方法は次のとおりです。</span>
                            <li><span data-i18n="shikinKessai.table.twelfth.right.second">金銭による供託</span></li>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="shikinKessai.table.thirteenth.left">利用者の意思に反して権限を有しない者により利用された場合により発生した利用者の損失の補償その他の対応に関する方針</th>
                        <td>
                            <span data-i18n="shikinKessai.table.thirteenth.right.first">原則として、当社は、当社に帰責事由がなく不正利用がなされた場合を含め、JPYCの盗難、紛失、改ざん等により、利用者に生じた損失について、その責任を負わないものとします。</span>
                            <br /><br />
                            <span data-i18n="shikinKessai.table.thirteenth.right.second">ただし、不正利用の有無及び原因、利用者の利用規約違反や故意過失の有無等を調査の調査の結果、利用者の保護が必要である場合には、その損失を補償する等の対応を個別に検討させていただきます。</span>
                            <br /><br />
                            <span data-i18n="shikinKessai.table.thirteenth.right.third">不正利用があった場合は上記記載の「お問合わせ先」まで速やかにご連絡をお願いします。</span>
                        </td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
