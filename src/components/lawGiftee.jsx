// eslint-disable-next-line

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
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

const shikin_kessai = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <LoadI18nDataOnMount />
      <main className="shikin_main">
        <h2 className="page-title" data-i18n="lawGiftee.mainText">
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="lawGiftee.table.first.left"></th>
            <td data-i18n="lawGiftee.table.first.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.second.left"></th>
            <td data-i18n="lawGiftee.table.second.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.third.left"></th>
            <td data-i18n="lawGiftee.table.third.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.fourth.left"></th>
            <td data-i18n="lawGiftee.table.fourth.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.fifth.left"></th>
            <td>
              <span data-i18n="lawGiftee.table.fifth.right.first">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.sixth.left"></th>
            <td data-i18n="lawGiftee.table.sixth.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.seventh.left"></th>
            <td>
              
              <Link to="/company" data-i18n="lawGiftee.table.seventh.right.first">

              </Link>
              <br />
              <Link to="/individual" data-i18n="lawGiftee.table.seventh.right.second">

              </Link>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.eighth.left"></th>
            <td data-i18n="lawGiftee.table.eighth.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.ninth.left"></th>
            <td data-i18n="lawGiftee.table.ninth.right"></td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.tenth.left"></th>
            <td>
              <p data-i18n="lawGiftee.table.tenth.right">
              </p>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.eleventh.left"></th>
            <td data-i18n="lawGiftee.table.eleventh.right"></td>
          </tr>
          <tr>
            <th>
              <span data-i18n="lawGiftee.table.twelfth.left.first"></span><br />
              <br />
              <span data-i18n="lawGiftee.table.twelfth.left.second"></span>
            </th>
            <td>
              <span data-i18n="lawGiftee.table.twelfth.right.first"></span><br />
              <br />
              <span data-i18n="lawGiftee.table.twelfth.right.second">
              </span>
              <br />
            </td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.thirteenth.left"></th>
            <td>
              <span data-i18n="lawGiftee.table.thirteenth.right">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="lawGiftee.table.fourteenth.left"></th>
            <td data-i18n="lawGiftee.table.fourteenth.right"></td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
