import { FunctionComponent } from "react";
import Banner from "./Banner";
import Content from "./Content";
import "./WELCOME.css";

export type WELCOMEType = {
  className?: string;
};

const WELCOME: FunctionComponent<WELCOMEType> = ({ className = "" }) => {
  return (
    <div className={`welcome ${className}`}>
      <div className="welcome-child" />
      <main className="header">
        <Banner />
        <Content />
      </main>
      <footer className="bottom">
        <div className="bottom-child" />
        <div className="proudly-presented-by-container">
          <span>{`Proudly Presented by `}</span>
          <a
            className="victorflow"
            href="https://www.victorflow.com/"
            target="_blank"
          >
            <span className="victorflow1">VictorFlow</span>
          </a>
          <span>{` in Designed by Figma and Build in Webflow `}</span>
        </div>
      </footer>
    </div>
  );
};

export default WELCOME;
