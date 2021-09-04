// eslint-disable-next-line

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../css/privacy.css';

class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const furusatoNozei = () => {
  return (
    <>
      <ScrollToTopOnMount/>
      <Header />
      <main className="shikn_main">
        <h2 className="privacy-page-title" data-i18n="furusato-nozei.mainText">JPYCふるさと納税利用規約</h2>
        <div className="privacy-main">
          <div>
            <h3 data-i18n="furusato-nozei.first.mainText">第一条（適用範囲）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.first.subText.first">・個人情報保護法をはじめとした関係法令・規範を遵守いたします。</p></li>
                <li><p data-i18n="furusato-nozei.first.subText.second">当社が当社サービスサイト上で掲載する説明等は、本規約の一部を構成するものとします。</p></li>
                <li><p data-i18n="furusato-nozei.first.subText.third">本規約の内容と、前項の説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</p></li>
                <li><p data-i18n="furusato-nozei.first.subText.fourth">当社は、必要に応じて本規約の策定、変更、追加、変更又は削除（以下「変更等」という。）を行うことがあり、当社が適当と判断する方法で変更後の本規約の内容についてお客様に対して通知し、通知の際に定める適用開始日をもって効力を生じるものとします。本規約の変更の効力発生後も、お客様が本サービスのご利用を継続した場合には、変更後の本規約につき有効な同意をしたものとみなします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.second.mainText">第二条　（本サービスの概要）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.second.subText.first">本サービスは、ふるさと納税制度において特定の自治体への金銭の寄附及びこれに関連する手続きを行うことのできるサービスです。</p></li>
                <li><p data-i18n="furusato-nozei.second.subText.second">お客様は、本サービスを通じて、自治体を選択し、寄附の使い道、お礼の品を指定して、当該自治体に寄附を行うことができます。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.third.mainText">第三条　（申込手続き）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.third.subText.first">お客様は、本サービスの利用にあたっては、本サービスを利用する上で必要となる情報を当社所定のフォームに入力する方法により、寄附の申込手続きを行うものとします。</p></li>
                <li><p data-i18n="furusato-nozei.third.subText.second">お客様は、前項の申込手続きを完了した場合には、当該申込みを撤回することができません。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fourth.mainText">第四条　（利用者情報の取扱い）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fourth.subText.first.mainText">当社は自治体からの業務委託に基づき、お客様の利用者情報を取得し、以下の目的で利用します。下記の利用目的を変更する場合には、当該内容を当社ホームページなどにより公表致します。</p></li>
                <ol>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.first">インターネットによるふるさと納税の受付</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.second">自治体による返礼品の配送、寄附金受領証明書の発行及びその他これに付随する業務のため</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.third">自治体への寄附に関する情報の集計、分析、調査等のため</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.fourth">当社が受け付けた寄附に関して当該寄附を受けた自治体への報告等を行うため</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.fifth">お問い合わせに関して回答するため</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.sixth">上記のほか、当社のサービス向上及び適切な運営管理のため</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.seventh">当社や自治体が提供するサービスの向上、新たな商品・サービスの開発のためのアンケート実施及び分析業務</p></li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.first.eighth">各種イベントやキャンペーンに関する情報を提供するため</p></li>
                </ol>
                <li><p data-i18n="furusato-nozei.fourth.subText.second.mainText">当社は、取得した利用者情報を以下の第三者へ提供します。お客様は、当社に対して第三者への個人情報提供の停止を求めることができますが、個人情報の提供を停止することにより、サービスの全部又は一部が受けられなくなることに同意するものとします。</p></li>
                <ol>
                  <li>
                    <p data-i18n="furusato-nozei.fourth.subText.second.first.mainText">寄附を受けた自治体</p>
                    <p data-i18n="furusato-nozei.fourth.subText.second.first.subText">当社に業務を委託する自治体が、法令に基づき行わなければならない事務及び寄附を収納するために必要な事務等が発生した場合、当該事務を遂行する目的のため、お客様が寄附をする自治体に対し、当該自治体に寄附を行ったお客様にかかる以下の利用者情報を提供します。各自治体の個人情報の取り扱いについては、各地方公共団体の定める個人情報保護条例等をご確認ください。</p>
                    <ul>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.first">利用規約及びプライバシーポリシー同意</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.second">自治体の選択</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.third">返礼品の選択</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fourth">返礼品の金額帯と返礼品番号</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fifth">返礼品名</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.sixth">寄付金の使い道の選択</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.seventh">寄附金額の入力</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.eighth">姓名</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.ninth">郵便番号</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.tenth">住民票住所</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.eleventh">返礼品の配送先</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twelfth">配送先郵便番号</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.thirteenth">配送先住所</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fourteenth">電話番号</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.fifteenth">Eメールアドレス</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.sixteenth">送金ネットワーク</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.seventeenth">お客様のウォレットアドレス</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.eighteenth">自治体のワンストップ特例申請書の送付希望の有無</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.nineteenth">申込みに関する備考</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twentieth">自治体への応援メッセージ</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-first">寄附をしたことに関する住所の公表の可否</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-second">寄附をしたことに関する氏名の公表の可否</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-third">寄附をしたことに関する金額の公表の可否</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-fourth">寄附のきっかけ</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-fifth">フォーム申請日</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-sixth">入金確認日時</p></li>
                      <li><p data-i18n="furusato-nozei.fourth.subText.second.first.twenty-seventh">その他上記目的を遂行するために必要な情報</p></li>
                    </ul>
                  </li>
                  <li><p data-i18n="furusato-nozei.fourth.subText.second.second">返礼品（代替品を含む）の提供事業者（以下「返礼品提供事業者」という。）返礼品の配送に係る事務等を行う目的のため、返礼品提供事業者に対し、当社又は自治体を通じ、前号の利用者情報を提供します。</p></li>
                </ol>
                <li><p data-i18n="furusato-nozei.fourth.subText.third">前項２項のほか、当社は、当社のプライバシーポリシーに基づき、お客様の利用者情報を取り扱います。</p></li>
                <li><p data-i18n="furusato-nozei.fourth.subText.fourth">当社は、お客様が当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、お客様はこれに異議を唱えないものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fifth.mainText">第５条　（寄附金の支払方法）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fifth.subText.first">当社は、当社が発行する前払式支払手段として発行する日本円連動ステーブルコインJPY Coin（以下「JPYC」という。）払いの収納代行による方法により寄附を行うことができます。</p></li>
                <li><p data-i18n="furusato-nozei.fifth.subText.second">自治体が指定した収納代行事業者である当社がお客様から前項の寄附金に相当するJPYCの送信を受けた時点をもって納付がなされたものとします。</p></li>
                <li><p data-i18n="furusato-nozei.fifth.subText.third">寄附の申込み手続きを完了した日より起算し７日以内にお客様から当社へのJPYCの送信がなされない場合には、当該寄附の申込みは無効となります。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.sixth.mainText">第６条　（当社から自治体への払込み）</h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.sixth.subText">前条により当社が寄附金を収納したときは、当社は、自治体に対し、自治体と締結する契約に定める方法及び日程に従い、寄附金を払い込みます。</p>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.seventh.mainText">第７条　（返礼品）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.seventh.subText.first">お客様は、返礼品の提供を申し出ている自治体に対し、当該自治体が定める条件に従って返礼品を指定し、本サイトを利用して寄附をすることができます。</p></li>
                <li><p data-i18n="furusato-nozei.seventh.subText.second">返礼品の提供及び配送手続きは自治体が行います。</p></li>
                <li><p data-i18n="furusato-nozei.seventh.subText.third">返礼品は、本サービスの利用の前後を問わず、自治体における在庫状況その他の事情により提供内容が変更又は中止されることがあります。</p></li>
                <li><p data-i18n="furusato-nozei.seventh.subText.fourth">当社は、当社の責に帰すべき事由による場合を除き、返礼品の提供及び配送等に関し、何ら責任を負わないものとします。返礼品の不着、欠陥、表示に係る不具合その他の不都合等に関しては、自治体にお問合せください。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.eighth.mainText">第８条　（寄附金受領証明書）</h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.eighth.subText">寄附金受領証明書は、寄附を収納した自治体が、その責任で発行します。</p>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.ninth.mainText">第９条　（ワンストップ特例制度に基づく申告）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.ninth.subText.first">本サービスにおいて受付けられた特例申請は、取り下げることはできません。</p></li>
                <li><p data-i18n="furusato-nozei.ninth.subText.second">お客様は、前項に基づき特例申請を行うに際して本サービスに入力した情報に変更が生じた場合は、自治体所定の方法に従い自治体に連絡することにより変更しなければならないものとします。お客様は、寄附を行った翌年の1月10日までに当該変更を行わない場合は、ワンストップ特例制度の適用を受けられない場合があることを了承するものとします。</p></li>
                <li><p data-i18n="furusato-nozei.ninth.subText.third">お客様が特例申請を行った場合における当社の責任は、お客様が特例申請を希望している事実及びお客様が寄附の申込み手続き時において入力したお客様に係る情報を、寄附先自治体が提供することに限られるものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.tenth.mainText">第１０条　（連絡・通知）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.tenth.subText.first">お客様からの問い合わせその他お客様から当社に対する連絡又は通知、及び本規約の変更に関する通知その他当社からお客様に対する連絡又は通知は、当社の定める方法で行うものとします。</p></li>
                <li><p data-i18n="furusato-nozei.tenth.subText.second">当社が登録事項に含まれるメールアドレスその他の連絡先に連絡又は通知を行った場合、お客様は当該連絡又は通知を受領したものとみなします。</p></li>
                <li><p data-i18n="furusato-nozei.tenth.subText.third">お客様が登録した情報に誤りがあったために当社がお客様に通知、連絡することができなかった場合、これに起因してお客様に生じる損害及びその他の不利益について当社は責任を負わないものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.eleventh.mainText">第１１条　（禁止事項）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="furusato-nozei.eleventh.subText.first.mainText">お客様は、本サービスの利用にあたって、以下の行為を行ってはならないものとします。</p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.first">当社、自治体又は返礼品提供事業者の権利を侵害する行為及び侵害するおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.second">当社、自治体又は返礼品提供事業者の財産を侵害する行為及び侵害するおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.third">上記①又は②の他、当社、自治体又は返礼品提供事業者に損害を与える行為及び与えるおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fourth">コンピュータウィルス等の有害なプログラムを本サービスを通じて又は本サービスに関連して使用し、もしくは、提供する行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fifth">虚偽、不当な申し込みをする行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.sixth">他者の代わりに、本人の承諾なく申し込みをする行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.seventh">本サービスの運営を不当に妨害し、当社に不利益を生じさせる行為又はそのおそれがある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.eighth">当社又は第三者の著作権等の知的財産権、その他の権利を侵害する行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.ninth">当社又は第三者を誹謗中傷し、又は、名誉もしくは信用を傷つけるような行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.tenth">他のお客様が本サービスを利用することを妨げる行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.eleventh">当社又は第三者の財産、プライバシー、肖像権もしくはパブリシティ権を侵害する行為、又は、侵害するおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.twelfth">選挙期間中であるか否かを問わず、選挙運動又はこれに類する行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.thirteenth">公序良俗に反し又は反するおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fourteenth">法令に違反し又は違反するおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.fifteenth">犯罪的行為又は犯罪的行為に結びつく行為又はそのおそれのある行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.sixteenth">反社会的勢力に対する利益供与その他の協力をする行為</p></li>
                    <li><p data-i18n="furusato-nozei.eleventh.subText.first.seventeenth">その他当社が不適切と判断する行為</p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.eleventh.subText.second">当社は、お客様が、前各号のいずれかの事由に該当する場合又はその合理的な疑いを認めた場合には、事前に通知又は催告することなく、当該お客様のご利用を一時的に停止し、又はお客様としての登録を抹消することができます。</p></li>
                <li><p data-i18n="furusato-nozei.eleventh.subText.third">前項の場合、お客様は、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.twelfth.mainText">第１２条　（免責）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.twelfth.subText.first">当社は、お客様の特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、お客様による本サービスの利用がお客様に適用のある法令又は業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。</p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.second">お客様が寄附に関連して税控除を受ける場合はかかる手続きを自己の責任で行うものとし、当社はかかる手続きに関しいかなる責任も負わないものとします。</p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.third">お客様は、本サービスにおいて、自治体により提供される返礼品に係る法的責任がその返礼品を提供した自治体に帰属していることに同意します。</p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.fourth">当社は、本サービスの利用又は利用不能より生じる損害につき、当社の故意又は重過失による損害を除き、責任を負わないものとします。</p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.fifth">本サービスに関連してお客様と他のお客様又は第三者との間において生じた取引、連絡、紛争等については、当社は責任を負わず、お客様が自己の責任によって解決するものとします。</p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.sixth">当社は、お客様が本サービスを利用したことに関連して取得した情報を保存又は開示する義務を負わないものとします。ただし、当社のプライバシーに定めのある場合はこの限りではありません。</p></li>
                <li><p data-i18n="furusato-nozei.twelfth.subText.seventh">火災、停電、その他事故、地震、その他天災、戦争、政変、その他これらに類する非常事態、基幹通信事業者などに起因するネットワーク障害、法令に基づく指示・命令、お客様又は第三者の行為に起因する事態、その他これらに準ずる不測の事態によって本サービスの提供が困難となった場合、当社は、これに起因してお客様に生ずる損害及びその他の不利益について責任を負わないものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.thirteenth.mainText">第１３条　（損害賠償）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.thirteenth.subText.first">お客様の本規約に反した行為又は不正もしくは違法な行為により、当社又は自治体が損害を受けた場合には、当該お客様に対して損害賠償の請求をする場合があります。</p></li>
                <li><p data-i18n="furusato-nozei.thirteenth.subText.second">お客様と自治体との間で起きた紛争、お客様が自治体に対して与えた損害等に関しては、お客様の責任と負担において解決するものとし、当社は責任を負わないものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fourteenth.mainText">第１４条　（本サービスの停止・中断・変更）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fourteenth.subText.first">当社は、お客様に事前に通知することなく、本サービスの内容を変更又は終了することがあります。</p></li>
                <li><p data-i18n="furusato-nozei.fourteenth.subText.second">当社は、お客様が、前項の変更等に伴い被った不利益、損害についても、責任を負いません。</p></li>
                <li>
                  <p data-i18n="furusato-nozei.fourteenth.subText.third.mainText">当社は、以下の何れかの事由に該当する場合、お客様に事前に通知することなく本サービスの一部もしくは全部を中断又は停止することがあります。</p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.first">各サービスの提供のための装置、システムの保守点検、更新を定期的に又は緊急に行う場合</p></li>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.second">火災、停電、天災等不可抗力により、各サービスの提供が困難な場合</p></li>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.third">本サービスを提供するための通信又は回線の障害が生じる等、運用上又は技術上、本サービスの提供が不能又は困難になった場合</p></li>
                    <li><p data-i18n="furusato-nozei.fourteenth.subText.third.fourth">その他、運用上あるいは技術上当社が各サービスの一時中断、もしくは、停止が必要であるか、又は当社が各サービスの提供が困難と判断した場合</p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.fourteenth.subText.fourth">当社は、各サービスの提供の一時中断、停止等の発生により、お客様又は自治体が被った不利益、損害について、責任を負いません。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.fifteenth.mainText">第１５条　（知的財産）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.fifteenth.subText.first">当社が本サービスを通じて提供する情報、プログラム、コンテンツ又はソフトウェア、及び、本サービスを利用してお客様が取得した全ての情報に関する知的財産権は、当社又は権利者に帰属しており、お客様は、本サービス上で特に許諾される場合を除き、これらを当社及び権利者に無断で転載等の利用をすることはできません。</p></li>
                <li><p data-i18n="furusato-nozei.fifteenth.subText.second">お客様が前項に違反した場合、当社は、利用を差し止め、当該行為によって生じた損害を請求できるものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.sixteenth.mainText">第１６条　（秘密保持）</h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.sixteenth.subText">お客様は、当社がお客様に対して秘密に取扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。</p>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.seventeenth.mainText">第１７条　（サービス利用契約上の地位の譲渡等）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.seventeenth.subText.first">お客様は、当社の書面による事前の承諾なく、利用契約上の地位又は本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。</p></li>
                <li><p data-i18n="furusato-nozei.seventeenth.subText.second">当社は本サービスに関する事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにお客様の登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、お客様は、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.eighteenth.mainText">第１８条　（反社会的勢力の排除）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.eighteenth.subText.first">お客様は、本サービスの利用にあたり、自身が暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団その他これらに準ずる者（以下総称して「反社会的勢力」という。）に該当せず、また将来においても該当しないことを表明し、保証するものとします。</p></li>
                <li>
                  <p data-i18n="furusato-nozei.eighteenth.subText.second.mainText">お客様は、自己又は第三者を利用して以下の各号の一にでも該当する行為をしないことを表明し、保証するものとします。</p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.first">暴力的な要求行為</p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.second">法的な責任を超えた不当な要求行為</p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.third">取引に関して脅迫的な言動をし、又は、暴力を用いる行為</p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.fourth">風説を流布し、偽計又は威力を用いて相手方の信用を毀損又は業務を妨害する行為</p></li>
                    <li><p data-i18n="furusato-nozei.eighteenth.subText.second.fifth">その他前各号に準ずる行為</p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.eighteenth.subText.third">当社は、お客様が前二項のいずれかに反することが判明した場合、何らの通知を要せず、いつでも本サービスの利用停止その他必要な措置を講じることができるものとします。なお、この場合、当社は、お客様に生じた損害又は不利益について一切の責任を負いません。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.nineteenth.mainText">第１９条　（本規約の変更）</h3>
            <div className="privacy-text">
              <ol>
                <li>
                  <p data-i18n="furusato-nozei.nineteenth.subText.first.mainText">当社は以下の場合に、当社の裁量により、本規約を変更することができます。</p>
                  <ol>
                    <li><p data-i18n="furusato-nozei.nineteenth.subText.first.first">本規約の変更が、お客様の一般の利益に適合するとき</p></li>
                    <li><p data-i18n="furusato-nozei.nineteenth.subText.first.second">本規約の変更が、契約をした目的に反せず、かつ、変更の必要性、変更後の内容の相当性、変更の内容その他の変更に係る事情に照らして合理的なものであるとき</p></li>
                  </ol>
                </li>
                <li><p data-i18n="furusato-nozei.nineteenth.subText.second">当社は前項による本規約の変更にあたり、本規約を変更する旨、変更後の本規約の内容及び効力発生日を、当社が適切であると判断する方法により周知します。</p></li>
                <li><p data-i18n="furusato-nozei.nineteenth.subText.third">本規約の変更の効力発生日以降にお客様が本サービスを利用したときは、お客様は、本規約の変更に同意したものとみなします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.twentieth.mainText">第２０条　（管轄）</h3>
            <div className="privacy-text">
              <ol>
                <li><p data-i18n="furusato-nozei.twentieth.subText.first">本規約及びサービス利用契約の準拠法は日本法とします。</p></li>
                <li><p data-i18n="furusato-nozei.twentieth.subText.second">本規約又はサービス利用契約に起因し、又は関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p></li>
              </ol>
            </div>
          </div>
          <div>
            <h3 data-i18n="furusato-nozei.end.mainText">附則</h3>
            <div className="privacy-text">
              <p data-i18n="furusato-nozei.end.subText.first">2021年9月1日制定</p>
            </div>
          </div>
          <div className="furusato-end">以上</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default furusatoNozei;
