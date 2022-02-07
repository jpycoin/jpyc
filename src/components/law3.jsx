// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../css/shikin.css";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const shikin_kessai = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <main className="shikin_main">
        <h2 className="page-title" data-i18n="law3.mainText">
          特定商取引法に基づく表示（JPYC販売所）
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="law3.table.first.left">販売業者名</th>
            <td data-i18n="law3.table.first.right">JPYC株式会社</td>
          </tr>
          <tr>
            <th data-i18n="law3.table.second.left">責任者</th>
            <td data-i18n="law3.table.second.right">代表取締役 岡部典孝</td>
          </tr>
          <tr>
            <th data-i18n="law3.table.third.left">所在地</th>
            <td data-i18n="law3.table.third.right">
              〒100-0004
              東京都千代田区大手町一丁目6番1号　大手町ビル4階　FINOLAB内
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fourth.left">電話番号</th>
            <td data-i18n="law3.table.fourth.right">03-6820-0461</td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fifth.left">電話応対時間</th>
            <td>
              <span data-i18n="law3.table.fifth.right.first">
                平日　午前10時～午後7時00分まで（年末・年始を除く）
              </span>
              <br />
              <span data-i18n="law3.table.fifth.right.second">
                ※受付時間外の場合は、メールにてお問い合わせください。
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.sixth.left">メールアドレス</th>
            <td>jpyc_support@jcam.co.jp</td>
          </tr>
          <tr>
            <th data-i18n="law3.table.seventh.left">お問い合わせ</th>
            <td>
              
              <Link to="/company" data-i18n="law3.table.seventh.right.first">
                法人の方
              </Link>
              <br />
              <Link
                to="/individual"
                data-i18n="law3.table.seventh.right.second"
              >
                一般の方
              </Link>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.eighth.left">ウェブサイトURL</th>
            <td>https://app.jpyc.jp/</td>
          </tr>
          <tr>
            <th data-i18n="law3.table.ninth.left">前払式支払手段の名称</th>
            <td data-i18n="law3.table.ninth.right">JPYC</td>
          </tr>
          <tr>
            <th data-i18n="law3.table.tenth.left">販売価格</th>
            <td>
              <span data-i18n="law3.table.tenth.right.first">1JPYC＝1円</span>
              {/* <br />
              <br /> */}
              {/* <span data-i18n="law3.table.tenth.right.second">
              </span> */}
            </td>
          </tr>
          <tr>
            <th>
              <span data-i18n="law3.table.eleventh.left.first">
                代金の支払時期
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.eleventh.left.second">
                申込みの有効期限
              </span>
            </th>
            <td>
              <span data-i18n="law3.table.eleventh.right.first">
                お申し込み後、1週間以内にお支払いください。
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.eleventh.right.second">
                お申込日から1週間以内にご入金を確認できなかった場合はキャンセルされたものとみなし、購入申込みは取り消させていただきます。
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.twelfth.left">お支払い方法</th>
            <td>
              <span data-i18n="law3.table.twelfth.right.first">・銀行振込</span>
              <br />
              <br />
              <span data-i18n="law3.table.twelfth.right.second">・ETH送金</span>
              <br />
              <br />
              <span data-i18n="law3.table.twelfth.right.third">・BTC送金</span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.thirteenth.left">
              商品代金以外の必要料金
            </th>
            <td>
              <span data-i18n="law3.table.thirteenth.right.first">
                ・銀行振込の場合
              </span>
              <br />
              <span data-i18n="law3.table.thirteenth.right.second">
                銀行振込手数料
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.thirteenth.right.third">
                ・ETH送金の場合
              </span>
              <br />
              <span data-i18n="law3.table.thirteenth.right.fourth">
                ネットワーク利用手数料（いわゆるGAS代）
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.thirteenth.right.fifth">
                ※JPYCを当社からお客様に送金する際のネットワーク利用手数料（いわゆるGAS代）は頂いておりません。
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.thirteenth.right.sixth">
                ※JPYCは前払式支払手段のため非課税
              </span>
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fourteenth.left">引き渡し期間</th>
            <td data-i18n="law3.table.fourteenth.right">
              お客様のご入金を確認後、原則翌営業日までにご指定のETHアドレス宛に送金致します。
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fifteenth.left">
              返品・交換・キャンセル
            </th>
            <td data-i18n="law3.table.fifteenth.right">
              購入・手続き完了後の返品・交換・キャンセルはお受けできません。
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.sixteenth.left">払戻しについて</th>
            <td data-i18n="law3.table.sixteenth.right">
              資金決済に関する法律に基づき払戻しが認められる場合を除き、払戻しはできません。
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
