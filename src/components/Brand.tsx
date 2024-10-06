import React from "react";
import { imgList } from "../data";
interface Props extends React.ComponentProps<"div"> {}

export const Brand = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div
        className="hero__last-text"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <h2 className="text-center " style={{ marginBottom: "5rem" }}>
          Based Cartel Families
        </h2>
      </div>

      <section
        className="brand__area  "
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 ">
              <div
                className="brand__flex"
                // ref={brandContainerRef}
                id="brandContainer"
              >
                {imgList.map((item, index) => {
                  return (
                    <div className="single__brand" key={index}>
                      <a href={item.link}>
                        <img src={item.src} alt={item.alt} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
