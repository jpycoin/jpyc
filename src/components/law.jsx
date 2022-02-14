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
        <h2 className="page-title" data-i18n="law.mainText">
          特定商取引法に基づく表示（JPYCギフト交換）
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="law.table.first.left">販売業者名</th>
            <td data-i18n="law.table.first.right">JPYC株式会社</td>
          </tr>
          <tr>
            <th data-i18n="law.table.second.left">責任者</th>
            <td data-i18n="law.table.second.right">代表取締役 岡部典孝</td>
          </tr>
          <tr>
            <th data-i18n="law.table.third.left">所在地</th>
            <td data-i18n="law.table.third.right">
              〒100-0004
              東京都千代田区大手町一丁目6番1号　大手町ビル4階　FINOLAB内
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.fourth.left">電話番号</th>
            <td data-i18n="law.table.fourth.right">03-6625-4855</td>
          </tr>
          <tr>
            <th data-i18n="law.table.fifth.left">電話応対時間</th>
            <td>
              <span data-i18n="law.table.fifth.right.first">
                平日　10時～18時まで（年末・年始を除く）
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.sixth.left">メールアドレス</th>
            <td data-i18n="law.table.sixth.right">jpyc_support@jcam.co.jp</td>
          </tr>
          <tr>
            <th data-i18n="law.table.seventh.left">お問い合わせ</th>
            <td>
              <Link to="/company" data-i18n="law.table.seventh.right.first">
                法人の方
              </Link>
              <br />
              <a
                href="https://jpyc-support.freshdesk.com/support/tickets/new"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="law.table.seventh.right.second"
              >
                一般の方
              </a>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.eighth.left">ウェブサイトURL</th>
            <td>https://app.jpyc.jp/gift/</td>
          </tr>
          <tr>
            <th data-i18n="law.table.ninth.left">交換金額</th>
            <td>
              <p data-i18n="law.table.ninth.right.first">
                （Vプリカギフト交換）
              </p>
              <p data-i18n="law.table.ninth.right.second">
                交換券種：1万円分 、5万円分、10万円分
              </p>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.tenth.left">代金以外の必要料金</th>
            <td>
              <p data-i18n="law.table.tenth.right.first">
                JPYCを弊社に送信する際のネットワーク利用手数料（いわゆるGAS代）
              </p>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.eleventh.left">お支払い方法</th>
            <td data-i18n="law.table.eleventh.right">JPYCによる決済</td>
          </tr>
          <tr>
            <th>
              <span data-i18n="law.table.twelfth.left.first">支払時期</span><br />
              <br />
              <span data-i18n="law.table.twelfth.left.second">申込みの有効期限</span>
            </th>
            <td>
              <span data-i18n="law.table.twelfth.right.first">弊社より注文確認メール到着後、1週間以内にJPYCにてお支払ください。</span><br />
              <br />
              <span data-i18n="law.table.twelfth.right.second">
                お申込日から1週間以内にJPYCの受信を確認できなかった場合はキャンセルされたものとみなし、申込みは取り消させていただきます。
              </span>
              <br />
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.thirteenth.left">引き渡し期間</th>
            <td>
              <span data-i18n="law.table.thirteenth.right.first">（Vプリカギフト）</span><br />
              <br />
              <span data-i18n="law.table.thirteenth.right.second">
                原則として、お客様のご入金を確認後、翌営業日まで。ただし、在庫状況等により、お客様のご入金確認後から最大5営業日ほど要する場合があります。
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.fourteenth.left">返品・交換・キャンセル</th>
            <td data-i18n="law.table.fourteenth.right">購入・手続き完了後の返品・交換・キャンセルはお受けできません。</td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
