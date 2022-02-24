// eslint-disable-next-line

import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Harasawa from '../image/people/Harasawa.png'
import Ido from '../image/people/Ido.jpg';
import Ito from '../image/people/Ito.jpg'
import Mizui from '../image/people/Mizui.png'
import Mori from '../image/people/Mori.png'
import Muraguchi from '../image/people/Muraguchi.png'
import Okabe from '../image/people/Okabe.png'
import Ono from "../image/people/Ono.jpg"
import Sasaki from '../image/people/Sasaki.png'
import Yanagisawa from '../image/people/Yanagisawa.png'
import Yamanaka from '../image/people/Yamanaka.jpg';
import '../css/member.css'
import LoadI18nDataOnMount from "./LoadI18nDataOnMount";


class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return null
  }
}

const Member = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <LoadI18nDataOnMount />
      <main className="member-main">
        <section className="member-team">
          <h2 className="member-section-title" data-i18n="member.team.mainText">
          </h2>
          <div className="team-people">
            <div className="person">
              <a href="https://www.linkedin.com/in/noritakaokabe/" className="person-link" target="_blank" rel="noopener noreferrer external">
                <img src={Okabe} alt="person" className="person-img" />
                <p className="member_name" data-i18n="member.team.first.name"></p>
                <p data-i18n="member.team.first.position"></p>
              </a>
            </div>
            <div className="person">
              <a href="https://www.linkedin.com/in/yosui-harasawa-a47b6b158/" className="person-link" target="_blank" rel="noopener noreferrer external">
                <img src={Harasawa} alt="person" className="person-img" />
                <p className="member_name" data-i18n="member.team.second.name"></p>
                <p data-i18n="member.team.second.position"></p>
              </a>
            </div>
            <div className="person">
              <a href="https://www.linkedin.com/in/itoyohei/" className="person-link" target="_blank" rel="noopener noreferrer external">
                <img src={Ito} alt="person" className="person-img" />
                <p className="member_name" data-i18n="member.team.third.name"></p>
                <p data-i18n="member.team.third.position"></p>
              </a>
            </div>
            <div className="person">
              <a href="https://www.linkedin.com/in/HanaeOno/" className="person-link" target="_blank" rel="noopener noreferrer external">
                <img src={Ono} alt="person" className="person-img" />
                <p className="member_name" data-i18n="member.team.fourth.name"></p>
                <p data-i18n="member.team.fourth.position"></p>
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 className="member-section-title" data-i18n="member.advisor.mainText">
          </h2>
          <div className="adviser-people">
            <div className="person">
              <img src={Muraguchi} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.first.name"></p>
            </div>
            <div className="person">
              <img src={Mori} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.second.name"></p>
            </div>
            <div className="person">
              <img src={Mizui} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.third.name"></p>
            </div>
            <div className="person">
              <img src={Yanagisawa} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.fourth.name"></p>
            </div>
            <div className="person">
              <img src={Sasaki} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.fifth.name"></p>
            </div>
            <div className="person">
              <img src={Ido} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.sixth.name"></p>
            </div>
            <div className="person">
              <img src={Yamanaka} alt="person" className="person-img" />
              <p className="member_name" data-i18n="member.advisor.seventh.name"></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Member;
