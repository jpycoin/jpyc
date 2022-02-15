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
        <h2 className="page-title" data-i18n="law.mainText">
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="law.table.first.left"></th>
            <td data-i18n="law.table.first.right"></td>
          </tr>
          <tr>
            <th data-i18n="law.table.second.left"></th>
            <td data-i18n="law.table.second.right"></td>
          </tr>
          <tr>
            <th data-i18n="law.table.third.left"></th>
            <td data-i18n="law.table.third.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.fourth.left"></th>
            <td data-i18n="law.table.fourth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law.table.fifth.left"></th>
            <td>
              <span data-i18n="law.table.fifth.right.first">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.sixth.left"></th>
            <td data-i18n="law.table.sixth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law.table.seventh.left"></th>
            <td>
              <Link to="/company" data-i18n="law.table.seventh.right.first">
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
            <th data-i18n="law.table.eighth.left"></th>
            <td data-i18n="law.table.eighth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law.table.ninth.left"></th>
            <td>
              <p data-i18n="law.table.ninth.right.first">
              </p>
              <p data-i18n="law.table.ninth.right.second">
              </p>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.tenth.left"></th>
            <td>
              <p data-i18n="law.table.tenth.right.first">
              </p>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.eleventh.left"></th>
            <td data-i18n="law.table.eleventh.right"></td>
          </tr>
          <tr>
            <th>
              <span data-i18n="law.table.twelfth.left.first"></span><br />
              <br />
              <span data-i18n="law.table.twelfth.left.second"></span>
            </th>
            <td>
              <span data-i18n="law.table.twelfth.right.first"></span><br />
              <br />
              <span data-i18n="law.table.twelfth.right.second">
              </span>
              <br />
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.thirteenth.left"></th>
            <td>
              <span data-i18n="law.table.thirteenth.right.first"></span><br />
              <br />
              <span data-i18n="law.table.thirteenth.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law.table.fourteenth.left"></th>
            <td data-i18n="law.table.fourteenth.right"></td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
