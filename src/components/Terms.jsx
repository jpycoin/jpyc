// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/privacy.css";

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const Terms = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <main className="shikn_main">
        <h2 className="privacy-page-title" data-i18n="terms.mainText">
          JPYC利用規約
        </h2>
        <div className="privacy-main">
          <div>
            <h3 data-i18n="terms.first.mainText">第一条（適用範囲）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.first.subText.first">
                    本利用規約（以下「本規約」という。）は、ＪＰＹＣ株式会社（以下「当社」という。）が前払式支払手段として発行する日本円連動ステーブルコインJPY
                    Coin（以下「JPYC」といいます）に関する取扱いについて定めるものです。お客様は、本規約の内容を十分に理解し、本規約にご同意いただいた上で、JPYCをご利用いただくものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.first.subText.second">
                    当社が当社サービスサイト上で掲載するホワイトペーパー等、JPYCご利用に関するルールは、本規約の一部を構成するものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.first.subText.third">
                    本規約の内容と、前項のルールその他の本規約外におけるJPYCの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.first.subText.fourth">
                    当社は、必要に応じて本規約の策定、変更、追加、変更又は削除（以下「変更等」といいます。）を行うことがあり、当社が適当と判断する方法で変更後の本規約の内容について利用者に対して通知し、通知の際に定める適用開始日をもって効力を生じるものとします。本規約の変更の効力発生後も、利用者がJPYCのご利用を継続した場合には、変更後の本規約につき有効な同意をしたものとみなします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.second.mainText">
              第2条（ご利用いただける方法）
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.second.subText">
                JPYCは、お客様の指図に基づき当社を通じたECサイトの商品の代理購入やギフト券への交換など、当社所定の方法でご利用いただけます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.third.mainText">第3条（JPYCの発行）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.third.subText.first">
                    JPYCは、お客様から、当社所定の方法によりお申込みいただいたときは、お客様に対してJPYCをお客様指定のアドレスへ送信する方法で発行するものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.third.subText.second">
                    お客様は、JPYCをご利用いただくためには、次条に定める方法により、JPYCを購入していただくことが必要となります。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fourth.mainText">第4条（JPYCの購入）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.fourth.subText.first">
                    JPYCを購入するには、銀行振り込みまたは暗号資産の送信の方法によることができます。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.second">
                    JPYCの購入は、１円単位で行うことができます。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.third">
                    JPYCを購入できる上限額はありません。JPYCを購入できる最低額は1万円となります。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.fourth">
                    お客様が当社指定のフォームからJPYCの購入申込みを送信した時点をもって、当社とお客様との間で売買契約が成立するものとします。契約成立後はお客様の都合による注文のキャンセルはできません。ただし、JPYCの購入申込みを送信した日より起算し７日以内にお客様から当社へ支払いがなされない場合には、その購入申込みは無効となります。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourth.subText.fifth.mainText">
                    前項の規定にかかわらず、次の各号に掲げる事由に該当する場合、当該売買契約の全部又は一部を解除させて頂く場合があります。
                  </p>
                  <p data-i18n="terms.fourth.subText.fifth.first">
                    (1)
                    入力された情報に不足又は誤りがあり、別途当社から連絡を取らせていただいたにもかかわらず、連絡が取れない又は正確な情報を提供いただけなかったとき
                  </p>
                  <p data-i18n="terms.fourth.subText.fifth.second">
                    (2) 13条2項により実施する確認等ができなかったとき
                  </p>
                  <p data-i18n="terms.fourth.subText.fifth.third">
                    (3) その他不適切な申込であると当社が判断したとき
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fifth.mainText">第5条（JPYCのご利用）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.fifth.subText.first">
                    当社は、お客様から当社指定のアドレスへJPYCの送信を受けた場合、送信されたJPYCの金額に相当する利用料金のお支払いがあったものとみなします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fifth.subText.second">
                    お客様から送信を受けたJPYCの金額が利用料金に満たない場合には、JPYCを追加で送信いただくことになります。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.sixth.mainText">
              第6条（JPYCの残高の確認方法）
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.sixth.subText">
                お客様は、JPYC購入後の残高、ならびに利用料金およびお支払い後のJPYCの残高につき、MetaMaskなどお客様自身のウォレット上でご確認いただくことができます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.seventh.mainText">第7条（JPYCの払戻し等）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.seventh.subText.first">
                    お客様はJPYCの残高を払戻しまたは換金することはできません。ただし、経済情勢の変化、法令の改廃その他当社の都合により、資金決済に関する法律に基づき払戻しが認められる場合にJPYCの取扱いを全面的にまたはその一部につき廃止した場合（以下「廃止等」といいます）には、お客様は当社に対してJPYCの残高の払戻しを求めることができるものとし、当社所定の方法により払戻しをいたします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventh.subText.second">
                    当社は、お客様ご本人が操作したか否かの如何を問わず、ウォレットアドレスの一致等により当人認証を行うことで正当な利用者であることを確認します。当社は、かかる確認によって、当該認証をおこない利用したものをお客様ご本人であるとみなし、この状態において取引が行われた場合は、偽造、変造、盗用または不正使用等があったとしても、かかる取引を有効なものとみなします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventh.subText.third">
                    お客様がJPYCを紛失した場合、JPYCが盗難、偽造もしくは変造された場合、または前項の場合などお客様の許可なく第三者に使用された場合であっても、そのために生じた損害について、当社は責任を負いません。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.eighth.mainText">
              第８条（JPYCのご利用停止等）
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.eighth.subText.first.mainText">
                    当社は、次の各号のいずれかの行為を禁止しています。
                  </p>
                  <ol>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.first">
                        本規約に違反する行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.second">
                        お客様が不正な方法によりJPYCを取得し、または不正な方法で取得されたJPYCであることを知ってご利用すること
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.third">
                        マネー・ロンダリングに関連する行為もしくは法令に違反する行為または犯罪行為に関連する行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.fourth">
                        当社、その他のお客様またはその他の第三者に対する詐欺または脅迫行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.fifth">
                        公序良俗に反する行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.sixth">
                        当社、その他のお客様またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.seventh">
                        当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.eighth">
                        当社の運営を妨害するおそれのある行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.ninth">
                        当社のネットワークまたはシステム等への不正アクセス
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.tenth">
                        第三者に成りすます行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.eleventh">
                        当社が事前に許諾しない宣伝、広告、勧誘、または営業行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.twelfth">
                        反社会的勢力等（暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋、社会運動等標榜ゴロまたは特殊知能暴力集団その他これに準ずる者を意味します。以下同じ。）であること、もしくは資金提供その他を通じて反社会的勢力等の維持、運営、経営に協力または関与する等反社会的勢力との何らかの交流もしくは関与
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.eighth.subText.first.thirteenth">
                        その他当社がJPYCのご利用が不適切である行為
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p data-i18n="terms.eighth.subText.second">
                    当社は、お客様が、前各号のいずれかの事由に該当する場合またはその合理的な疑いを認めた場合には、事前に通知または催告することなく、当該お客様についてJPYCのご利用を一時的に停止し、またはお客様としての登録を抹消することができます。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eighth.subText.third">
                    前項の場合、お客様は、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.ninth.mainText">第9条（JPYCのご利用期間）</h3>
            <div className="privacy-text">
              <p data-i18n="terms.ninth.subText">
                JPYCは、廃止等した場合を除き、期間の制限なくご利用いただけます。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.tenth.mainText">
              第10条（JPYCの取扱いの中止または中断）
            </h3>
            <div className="privacy-text">
              <p data-i18n="terms.tenth.subText">
                当社は、システムの保守、通信回線または通信手段、コンピュータの障害などによるシステムの中止または中断の必要があると認めたときは、お客様に事前に通知することなく、JPYCの取扱いを中止または中断することができるものとします。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.eleventh.mainText">
              第11条（保証の否認及び免責）
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.eleventh.subText.first">
                    当社は、お客様の特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、お客様によるJPYCの利用がお客様に適用のある法令または業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.second">
                    当社は、お客様が被った損害につき、過去6ヶ月間にお客様が当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.third">
                    JPYCに関連してお客様と他のお客様または第三者との間において生じた取引、連絡、紛争等については、お客様が自己の責任によって解決するものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.fourth">
                    当社は、お客様がJPYCを利用したことに関連して取得した情報を保存又は開示する義務を負わないものとします。ただし、当社のプライバシーに定めのある場合はこの限りではありません。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eleventh.subText.fifth">
                    火災、停電、その他事故、地震、その他天災、戦争、政変、その他これらに類する非常事態、基幹通信事業者などに起因するネットワーク障害、法令に基づく指示・命令、お客様又は第三者の行為に起因する事態、その他これらに準ずる不測の事態によってJPYCの利用が困難となった場合、当社は、これに起因してお客様に生ずる損害及びその他の不利益について責任を負わないものとします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.twelfth.mainText">第12条（損害賠償）</h3>
            <div className="privacy-text">
              <p data-i18n="terms.twelfth.subText">
                お客様の本規約に反した行為又は不正もしくは違法な行為により、当社が損害を受けた場合には、当該お客様に対して損害賠償の請求をする場合があります。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.thirteenth.mainText">
              第13条（不正利用に対する取扱い）
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.thirteenth.subText.first">
                    原則として、当社は、当社に帰責事由がなく不正利用がなされた場合を含め、JPYCの盗難、紛失、改ざん等により、お客様に生じた損失について、その責任を負わないものとします。ただし、不正利用の有無及び原因、お客様の利用規約違反や故意過失の有無等を調査の調査の結果、お客様の保護が必要である場合には、その損失を補償する等の対応を個別に検討します。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.thirteenth.subText.second">
                    当社は、JPYCの不正利用防止のため、お客様に対し、必要な確認等を実施する場合があります。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fourteenth.mainText">第14条（知的財産）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.fourteenth.subText.first">
                    当社がJPYCを通じて提供する情報、プログラム、コンテンツ又はソフトウェア、及び、JPYCを利用してお客様が取得した全ての情報に関する知的財産権は、当社又は権利者に帰属しており、お客様は、当社から特に許諾される場合を除き、これらを当社及び権利者に無断で転載等の利用をすることはできません。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.fourteenth.subText.second">
                    お客様が前項に違反した場合、当社は、利用を差し止め、当該行為によって生じた損害を請求できるものとします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.fifteenth.mainText">第15条（秘密保持）</h3>
            <div className="privacy-text">
              <p data-i18n="terms.fifteenth.subText">
                お客様は、当社がお客様に対して秘密に取扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。
              </p>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.sixteenth.mainText">
              第16条（利用者情報の取扱い）
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.sixteenth.subText.first">
                    当社によるお客様の利用者情報の取扱いについては、別途当社プライバシーポリシーの定めによるものとし、お客様はこのプライバシーポリシーに従って当社がお客様の利用者情報を取扱うことについて同意するものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.sixteenth.subText.second">
                    当社は、お客様が当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、お客様はこれに異議を唱えないものとします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.seventeenth.mainText">第17条（連絡／通知）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.seventeenth.subText.first">
                    お客様からの問い合わせその他お客様から当社に対する連絡または通知、及び本規約の変更に関する通知その他当社からお客様に対する連絡または通知は、当社の定める方法で行うものとします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventeenth.subText.second">
                    当社が登録事項に含まれるメールアドレスその他の連絡先に連絡または通知を行った場合、お客様は当該連絡または通知を受領したものとみなします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.seventeenth.subText.third">
                    お客様が登録した情報に誤りがあったために当社がお客様に通知、連絡することができなかった場合、これに起因してお客様に生じる損害及びその他の不利益について当社は責任を負わないものとします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.eighteenth.mainText">
              第18条（サービス利用契約上の地位の譲渡等）
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.eighteenth.subText.first">
                    お客様は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.eighteenth.subText.second">
                    当社はJPYCに関する事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにお客様の登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、お客様は、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.nineteenth.mainText">
              第19条（反社会的勢力の排除）
            </h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.nineteenth.subText.first">
                    お客様は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.nineteenth.subText.second.mainText">
                    お客様は、自己又は第三者を利用して以下の各号の一にでも該当する行為をしないことを表明し、保証するものとします。
                  </p>
                  <ol>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.first">
                        暴力的な要求行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.second">
                        法的な責任を超えた不当な要求行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.third">
                        取引に関して脅迫的な言動をし、又は、暴力を用いる行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.fourth">
                        風説を流布し、偽計又は威力を用いて相手方の信用を毀損又は業務を妨害する行為
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.nineteenth.subText.second.fifth">
                        その他前各号に準ずる行為
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p data-i18n="terms.nineteenth.subText.third">
                    当社は、お客様が前二項のいずれかに反することが判明した場合、何らの通知を要せず、いつでもJPYCの利用停止その他必要な措置を講じることができるものとします。なお、この場合、当社は、お客様に生じた損害又は不利益について一切の責任を負いません。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.twentieth.mainText">第20条（本規約の変更）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.twentieth.subText.first.mainText">
                    当社は以下の場合に、当社の裁量により、本規約を変更することができます。
                  </p>
                  <ol>
                    <li>
                      <p data-i18n="terms.twentieth.subText.first.first">
                        本規約の変更が、お客様の一般の利益に適合するとき
                      </p>
                    </li>
                    <li>
                      <p data-i18n="terms.twentieth.subText.first.second">
                        本規約の変更が、契約をした目的に反せず、かつ、変更の必要性、変更後の内容の相当性、変更の内容その他の変更に係る事情に照らして合理的なものであるとき
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p data-i18n="terms.twentieth.subText.second">
                    当社は前項による本規約の変更にあたり、本規約を変更する旨、変更後の本規約の内容及び効力発生日を、当社が適切であると判断する方法により周知します。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.twentieth.subText.third">
                    本規約の変更の効力発生日以降にお客様がJPYCを利用したときは、お客様は、本規約の変更に同意したものとみなします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.twenty-first.mainText">第21条（管轄）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="terms.twenty-first.subText.first">
                    本規約及びサービス利用契約の準拠法は日本法とします。
                  </p>
                </li>
                <li>
                  <p data-i18n="terms.twenty-first.subText.second">
                    本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="terms.end.mainText">附則</h3>
            <div className="privacy-text">
              <p data-i18n="terms.end.subText.first">2021年9月1日制定</p>
              <p data-i18n="terms.end.subText.second">2021年10月26日改定</p>
            </div>
          </div>
          <div className="furusato-end">以上</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
