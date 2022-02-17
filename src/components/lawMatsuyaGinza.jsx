// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/shikin.css";
import LoadI18nDataOnMount from "./LoadI18nDataOnMount";


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
      <LoadI18nDataOnMount />
      <main className="shikin_main">
        <h2 className="page-title" data-i18n="lawMatsuyaGinza.mainText">
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.first.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.first.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.second.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.second.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.third.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.third.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.fourth.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.fourth.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.fifth.left"></th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.fifth.right.first">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.sixth.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.sixth.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.seventh.left">
            </th>
            <td data-i18n="lawMatsuyaGinza.table.seventh.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.eighth.left">
            </th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.eighth.right.first">
              </span>
              <br />
              <span data-i18n="lawMatsuyaGinza.table.eighth.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.ninth.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.ninth.right">
            </td>
          </tr>
          <tr>
            <th>
              <span data-i18n="lawMatsuyaGinza.table.tenth.left.first">
              </span>
              <br />
              <span data-i18n="lawMatsuyaGinza.table.tenth.left.second">
              </span>
            </th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.tenth.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="lawMatsuyaGinza.table.tenth.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.eleventh.left"></th>
            <td>
              <span data-i18n="lawMatsuyaGinza.table.eleventh.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="lawMatsuyaGinza.table.eleventh.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.twelfth.left">
            </th>
            <td data-i18n="lawMatsuyaGinza.table.twelfth.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.thirteenth.left"></th>
            <td data-i18n="lawMatsuyaGinza.table.thirteenth.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="lawMatsuyaGinza.table.fourteenth.left">
            </th>
            <td data-i18n="lawMatsuyaGinza.table.fourteenth.right">
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default LawMatsuyaGinza;
