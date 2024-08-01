import { FunctionComponent } from "react";
import "./Link.css";

export type LinkType = {
  className?: string;
};

const Link: FunctionComponent<LinkType> = ({ className = "" }) => {
  return (
    <div className={`link ${className}`}>
      <a
        className="get-template-49"
        href="https://www.victorflow.com/template/humanity"
        target="_blank"
      >
        Get Template $49 USD
      </a>
    </div>
  );
};

export default Link;
