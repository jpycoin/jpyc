
import React from "react";
import { LoadI18nData } from "../i18n";

export default class LoadI18nDataOnMount extends React.Component {
  componentDidMount(prevProps) {
    LoadI18nData()
  }
  render() {
    return null;
  }
}