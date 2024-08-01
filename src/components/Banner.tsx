import { FunctionComponent } from "react";
import "./Banner.css";

export type BannerType = {
  className?: string;
};

const Banner: FunctionComponent<BannerType> = ({ className = "" }) => {
  return (
    <section className={`banner ${className}`}>
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <div className="logo-wrapper">
        <div className="logo">
          <div className="logo-child" />
          <div className="logo-container">
            <div className="logo-sub-container">
              <div className="logo-inner-container">
                <img
                  className="image-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="image" />
              </div>
            </div>
          </div>
          <div className="humanity">Humanity</div>
        </div>
      </div>
      <div className="humanity-charity-website-tem-wrapper">
        <div className="humanity-charity">
          Humanity - Charity Website Template
        </div>
      </div>
      <div className="humanity-is-a">
        Humanity is a handy and perfect fundraising charity webflow template to
        create a positive impression on Nonprofit organizations. A very
        appealing template enriched with ever-needed numerous layouts.
      </div>
    </section>
  );
};

export default Banner;
