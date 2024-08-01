import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
  shipporiMincho?: string;
  shipporiMinchoHref: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  shipporiMincho,
  shipporiMinchoHref,
}) => {
  return (
    <div className={`font-type-icons-parent ${className}`}>
      <div className="font-type-icons">
        <img
          className="font-type-icon-container"
          loading="lazy"
          alt=""
          src="/vector-8.svg"
        />
        <div className="font-names-wrapper">
          <div className="font-names">
            <a
              className="shippori-mincho"
              href={shipporiMinchoHref}
              target="_blank"
            >
              {shipporiMincho}
            </a>
            <div className="font-variant-icons">
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="humanity-charity-container">
        <span className="humanity-charity-website-tem">
          <span className="humanity-charity1">{`Humanity - Charity Website Template `}</span>
          <span className="uses-free-licensed">uses free licensed</span>
        </span>
        <span className="uses-free-licensed">
          <span>{` `}</span>
        </span>
        <a
          className="google-fonts"
          href="https://fonts.google.com/"
          target="_blank"
        >
          <span>
            <span className="google-fonts1">Google Fonts.</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FrameComponent1;
