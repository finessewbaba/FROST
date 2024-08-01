import { FunctionComponent } from "react";
import Link from "./Link";
import FrameComponent1 from "./FrameComponent1";
import "./Content.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="content-left">
        <div className="frame-parent">
          <div className="image-parent">
            <img
              className="image-icon1"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="agency-info">
              <div className="agency-details">
                <div className="victorflow2">VictorFlow</div>
                <div className="webflow-design-container">
                  <p className="webflow-design">{`Webflow Design & `}</p>
                  <p className="webflow-design">Development Agency</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social-media">
            <b className="follow-us">Follow Us</b>
            <div className="social-links">
              <div className="instagram-icons-parent">
                <div className="instagram-icons">
                  <img
                    className="instagram-icon"
                    loading="lazy"
                    alt=""
                    src="/instagram.svg"
                  />
                </div>
                <div className="twitter-icons-parent">
                  <div className="twitter-icons">
                    <a
                      className="instagram"
                      href="https://www.instagram.com/victorflow_agency/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                    <div className="intimate-language-titles-wrapper">
                      <img
                        className="intimate-language-titles"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="join-our-instagram">
                    Join our Instagram page, We share UI/UX Design tips.
                  </div>
                </div>
              </div>
              <div className="frame-group">
                <div className="icon-wrapper">
                  <img className="icon" loading="lazy" alt="" src="/icon.svg" />
                </div>
                <div className="twitter-icons-parent">
                  <div className="twitter-parent">
                    <a
                      className="twitter"
                      href="https://twitter.com/victorflow_Agcy"
                      target="_blank"
                    >
                      Twitter
                    </a>
                    <div className="intimate-language-titles-wrapper">
                      <img
                        className="intimate-language-titles"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="join-our-instagram">
                    Join our Twitter page, We share UI/UX Design tips.
                  </div>
                </div>
              </div>
              <div className="instagram-icons-parent">
                <div className="instagram-icons">
                  <img
                    className="instagram-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className="twitter-icons-parent">
                  <div className="linkedin-parent">
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/company/victorflow"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <div className="vector-wrapper">
                      <img
                        className="intimate-language-titles"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="join-our-linkedin">
                    Join our Linkedin page, We share UI/UX Design tips.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="licenses">
            <div className="images-wrapper">
              <h1 className="images">Images</h1>
            </div>
            <div className="image-sources-icons-parent">
              <div className="image-sources-icons">
                <img
                  className="card-container-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-4.svg"
                />
                <div className="image-source-names">
                  <a
                    className="pexels"
                    href="https://www.pexels.com/"
                    target="_blank"
                  >
                    Pexels
                  </a>
                </div>
                <div className="downloads-icons">
                  <img
                    className="intimate-language-titles"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className="you-can-check-container">
                <p className="webflow-design">
                  You can check the licenses and download
                </p>
                <p className="the-images-for-free-on-pexels">
                  <span className="the-images-for">{`the images for free on `}</span>
                  <a
                    className="pexels1"
                    href="https://www.pexels.com/"
                    target="_blank"
                  >
                    <span className="pexels2">Pexels</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="image-sources-icons-parent">
              <div className="featured-collection-parent">
                <img
                  className="card-container-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
                <div className="image-source-names">
                  <a
                    className="unsplash"
                    href="https://unsplash.com/"
                    target="_blank"
                  >
                    Unsplash
                  </a>
                </div>
                <div className="downloads-icons">
                  <img
                    className="intimate-language-titles"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className="you-can-check-container">
                <p className="webflow-design">
                  <span>
                    <span>You can check the licenses and download</span>
                  </span>
                </p>
                <p className="the-images-for-free-on-pexels">
                  <span>
                    <span>the images for free on</span>
                    <span>{` `}</span>
                  </span>
                  <a
                    className="pexels1"
                    href="https://unsplash.com/"
                    target="_blank"
                  >
                    <span>
                      <span className="pexels2">Unsplash</span>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-info">
        <div className="info-bg">
          <div className="empty-indicators" />
          <h1 className="file-info">File Info</h1>
          <div className="file-details">
            <div className="file-details-child" />
            <div className="file-usage">
              <div className="file-icons">
                <img
                  className="logo-icon"
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
                <div className="file-types">
                  <div className="figma-file-for-container">
                    <span>
                      <span className="figma-file-for">Figma File for</span>
                      <b className="b">{` `}</b>
                    </span>
                    <b className="b">
                      <span>FREE</span>
                    </b>
                  </div>
                  <div className="it-is-free">
                    It is free to use for personal and commercial purposes.
                  </div>
                </div>
              </div>
              <div className="file-icons">
                <img
                  className="logo-icon1"
                  loading="lazy"
                  alt=""
                  src="/logo-1.svg"
                />
                <div className="webflow-parent">
                  <b className="webflow">Webflow</b>
                  <div className="the-complete-design">
                    The complete design is available as a Webflow template.
                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <div className="button">
                <div className="button1" />
                <Link />
              </div>
            </div>
          </div>
        </div>
        <div className="fonts-wrapper">
          <h1 className="fonts">Fonts</h1>
        </div>
        <FrameComponent1
          shipporiMincho="Shippori Mincho"
          shipporiMinchoHref="https://fonts.google.com/specimen/Shippori+Mincho"
        />
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="shop-links-wrapper">
              <img
                className="shop-links-icon"
                loading="lazy"
                alt=""
                src="/vector-8.svg"
              />
            </div>
            <div className="work-sans-wrapper">
              <a
                className="work-sans"
                href="https://fonts.google.com/specimen/Work+Sans"
                target="_blank"
              >{`Work Sans
 `}</a>
            </div>
            <div className="font-placeholder">
              <img
                className="intimate-language-titles"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className="humanity-charity-container1">
            <span className="humanity-charity-website-tem1">
              <span className="humanity-charity2">{`Humanity - Charity Website Template `}</span>
              <span className="uses-free-licensed1">uses free licensed</span>
            </span>
            <span className="uses-free-licensed1">
              <span>{` `}</span>
            </span>
            <a
              className="pexels1"
              href="https://fonts.google.com/"
              target="_blank"
            >
              <span>
                <span className="pexels2">Google Fonts.</span>
              </span>
            </a>
          </div>
        </div>
        <FrameComponent1
          shipporiMincho="Sue Ellen Francisco"
          shipporiMinchoHref="https://fonts.google.com/specimen/Sue+Ellen+Francisco"
        />
      </div>
    </section>
  );
};

export default Content;
