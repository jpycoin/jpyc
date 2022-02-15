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
        <h2 className="page-title" data-i18n="law3.mainText">
        </h2>
        <table className="shikin_table">
          <tr>
            <th data-i18n="law3.table.first.left"></th>
            <td data-i18n="law3.table.first.right"></td>
          </tr>
          <tr>
            <th data-i18n="law3.table.second.left"></th>
            <td data-i18n="law3.table.second.right"></td>
          </tr>
          <tr>
            <th data-i18n="law3.table.third.left"></th>
            <td data-i18n="law3.table.third.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fourth.left"></th>
            <td data-i18n="law3.table.fourth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fifth.left"></th>
            <td>
              <span data-i18n="law3.table.fifth.right.first">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.sixth.left"></th>
            <td data-i18n="law3.table.sixth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law3.table.seventh.left"></th>
            <td>
              
              <Link to="/company" data-i18n="law3.table.seventh.right.first">
              </Link>
              <br />
              <Link
                to="/individual"
                data-i18n="law3.table.seventh.right.second"
              >
              </Link>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.eighth.left"></th>
            <td data-i18n="law3.table.eighth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law3.table.ninth.left"></th>
            <td data-i18n="law3.table.ninth.right"></td>
          </tr>
          <tr>
            <th data-i18n="law3.table.tenth.left"></th>
            <td>
              <span data-i18n="law3.table.tenth.right.first"></span>
              {/* <br />
              <br /> */}
              {/* <span data-i18n="law3.table.tenth.right.second">
              </span> */}
            </td>
          </tr>
          <tr>
            <th>
              <span data-i18n="law3.table.eleventh.left.first">
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.eleventh.left.second">
              </span>
            </th>
            <td>
              <span data-i18n="law3.table.eleventh.right.first">
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.eleventh.right.second">
              </span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.twelfth.left"></th>
            <td>
              <span data-i18n="law3.table.twelfth.right.first"></span>
              <br />
              <br />
              <span data-i18n="law3.table.twelfth.right.second"></span>
              <br />
              <br />
              <span data-i18n="law3.table.twelfth.right.third"></span>
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.thirteenth.left">
            </th>
            <td>
              <span data-i18n="law3.table.thirteenth.right.first">
              </span>
              <br />
              <span data-i18n="law3.table.thirteenth.right.second">
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.thirteenth.right.third">
              </span>
              <br />
              <span data-i18n="law3.table.thirteenth.right.fourth">
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.thirteenth.right.fifth">
              </span>
              <br />
              <br />
              <span data-i18n="law3.table.thirteenth.right.sixth">
              </span>
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fourteenth.left"></th>
            <td data-i18n="law3.table.fourteenth.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.fifteenth.left">
            </th>
            <td data-i18n="law3.table.fifteenth.right">
            </td>
          </tr>
          <tr>
            <th data-i18n="law3.table.sixteenth.left"></th>
            <td data-i18n="law3.table.sixteenth.right">
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default shikin_kessai;
