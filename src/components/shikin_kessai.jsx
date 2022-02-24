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
        <h2 className="page-title" data-i18n="shikinKessai.mainText">
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="shikinKessai.table.first.left">
            </th>
            <td data-i18n="shikinKessai.table.first.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.second.left"></th>
            <td data-i18n="shikinKessai.table.second.right"></td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.third.left"></th>
            <td>
              <span data-i18n="shikinKessai.table.third.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="shikinKessai.table.third.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.fourth.left"></th>
            <td data-i18n="shikinKessai.table.fourth.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.fifth.left"></th>
            <td>
              <span data-i18n="shikinKessai.table.fifth.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="shikinKessai.table.fifth.right.second">
              </span>
              <br />
              <br />
              <Link
                to="/company"
                data-i18n="shikinKessai.table.fifth.right.third"
              >
              </Link>
              <br />
              <a
                href="https://jpyc-support.freshdesk.com/support/tickets/new"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="shikinKessai.table.fifth.right.fourth"
              >
              </a>
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.sixth.left"></th>
            <td>
              <span data-i18n="shikinKessai.table.sixth.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="shikinKessai.table.sixth.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.seventh.left"></th>
            <td>
              <span data-i18n="shikinKessai.table.seventh.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="shikinKessai.table.seventh.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.eighth.left">
            </th>
            <td>
              <span data-i18n="shikinKessai.table.eighth.right.first"></span>
              <a href="https://etherscan.io/token/0x2370f9d504c7a6e775bf6e14b3f12846b594cd53" target="__blank" >
                Etherscan
              </a>
              <span data-i18n="shikinKessai.table.eighth.right.second"></span>
              <a href="https://metamask.io/" target="__blank">metamask</a>
              <span data-i18n="shikinKessai.table.eighth.right.third"> </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="shikinKessai.table.ninth.left"></th>
            <td>
              <Link to="/privacy-policy">
                <span data-i18n="shikinKessai.table.ninth.right">
                </span>
              </Link>
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
