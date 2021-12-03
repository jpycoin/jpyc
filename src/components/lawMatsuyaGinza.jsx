// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/shikin.css";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const LawMatsuyaGinza = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <main className="shikin_main">
        <h2 className="page-title" data-i18n="lawMatsuyaGinza.mainText">
          特定商取引法に基づく表示（松屋銀座）
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.first.left">販売業者名</th>
            <td data-i18n="lawMatsuyaGinza.table.first.right">JPYC株式会社</td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.second.left">責任者</th>
            <td data-i18n="lawMatsuyaGinza.table.second.right">
              代表取締役社長 岡部典孝
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.third.left">所在地</th>
            <td data-i18n="lawMatsuyaGinza.table.third.right">
              〒100-0004
              東京都千代田区大手町一丁目6番1号　大手町ビル4階　FINOLAB内
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.fourth.left">電話番号</th>
            <td data-i18n="lawMatsuyaGinza.table.fourth.right">03-6625-4855</td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.fifth.left">電話応対時間</th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.fifth.right.first">
                平日　午前10時～午後6時まで（年末・年始を除く）
              </span>
              <br />
              <span data-i18n="lawMatsuyaGinza.table.fifth.right.second">
                ※受付時間外の場合は、メールにてお問い合わせください。
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.sixth.left">メールアドレス</th>
            <td>jpyc_matsuya@jcam.co.jp</td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.seventh.left">
              商品の販売価格
            </th>
            <td data-i18n="lawMatsuyaGinza.table.seventh.right">
              松屋銀座店頭での表示価格
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.eighth.left">
              商品代金以外の必要料金
            </th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.eighth.right.first">
                JPYCを弊社に送信する際のネットワーク利用手数料（いわゆるGAS代）
              </span>
              <br />
              <span data-i18n="lawMatsuyaGinza.table.eighth.right.second">
                配送料（配送の場合）
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.ninth.left">支払い方法</th>
            <td data-i18n="lawMatsuyaGinza.table.ninth.right">
              JPYCによる決済
            </td>
          </tr>
          <tr>
            <th>
              <span data-i18n="lawMatsuyaGinza.table.tenth.left.first">
                支払時期
              </span>
              <br />
              <span data-i18n="lawMatsuyaGinza.table.tenth.left.second">
                申込みの有効期限
              </span>
            </th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.tenth.right.first">
                松屋銀座店頭での商品取り置き当日の午後12時までに、申込みフォームへご入力のうえ、料金をJPYCにてご送信ください。
              </span>
              <br />
              <br />
              <span data-i18n="lawMatsuyaGinza.table.tenth.right.second">
                お取り置き当日午後12時までにフォームへの入力及びJPYCの送信が確認できなかった場合、購入申込みは無効とさせていただきます。
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.eleventh.left">引渡時期</th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.eleventh.right.first">
                （ご来店の場合）松屋銀座にて決済確認日の午後2時以降の商品渡しとなります。ただし基本的に、決済確認は送金いただいた翌日以降となります。
              </span>
              <br />
              <br />
              <span data-i18n="lawMatsuyaGinza.table.eleventh.right.second">
                （ご配送の場合）決済の確認日以降の配送手配となります。
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.twelfth.left">
              返品・交換・キャンセル
            </th>
            <td data-i18n="lawMatsuyaGinza.table.twelfth.right">
              申込みフォーム入力後のお客様都合による返品・交換・キャンセルはお受けできません。
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.thirteenth.left">注意事項</th>
            <td data-i18n="lawMatsuyaGinza.table.thirteenth.right">
              商品を確保できない場合など、当社の判断により契約の全部又は一部を解除させて頂く場合があります。
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.fourteenth.left">
              取扱対象外商品
            </th>
            <td data-i18n="lawMatsuyaGinza.table.fourteenth.right">
              金券（ギフトカード）、酒類、中古品、200万円以上の商品
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default LawMatsuyaGinza;
