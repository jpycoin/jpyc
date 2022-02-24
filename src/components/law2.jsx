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
        <h2 className="page-title" data-i18n="law2.mainText">
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="law2.table.first.left"></th>
            <td data-i18n="law2.table.first.right"></td>
          </tr>
          <tr>
            <th data-i18n="law2.table.second.left"></th>
            <td data-i18n="law2.table.second.right"></td>
          </tr>
          <tr>
            <th data-i18n="law2.table.third.left"></th>
            <td data-i18n="law2.table.third.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.fourth.left"></th>
            <td data-i18n="law2.table.fourth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law2.table.fifth.left"></th>
            <td>
              <span data-i18n="law2.table.fifth.right.first">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.sixth.left"></th>
            <td data-i18n="law2.table.sixth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law2.table.seventh.left"></th>
            <td>
              <Link to="/company" data-i18n="law2.table.seventh.right.first">
              </Link>
              <br />
              <a
                href="https://jpyc-support.freshdesk.com/support/tickets/new"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="law2.table.seventh.right.second"
              >
              </a>
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.eighth.left"></th>
            <td data-i18n="law2.table.eighth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law2.table.ninth.left">
            </th>
            <td data-i18n="law2.table.ninth.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.tenth.left"></th>
            <td>
              <span data-i18n="law2.table.tenth.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="law2.table.tenth.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.eleventh.left"></th>
            <td data-i18n="law2.table.eleventh.right">
              <br />
            </td>
          </tr>
          <tr>
            <th>
              <span data-i18n="law2.table.twelfth.left.first"></span>
              <br />
              <br />
              <span data-i18n="law2.table.twelfth.left.second">
              </span>
            </th>
            <td>
              <span data-i18n="law2.table.twelfth.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="law2.table.twelfth.right.second">
              </span>
              <br />
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.thirteenth.left"></th>
            <td>
              <span data-i18n="law2.table.thirteenth.right.first">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law2.table.fourteenth.left">
            </th>
            <td data-i18n="law2.table.fourteenth.right">
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
