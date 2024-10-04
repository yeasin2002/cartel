import React, { useEffect, useRef } from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Brand = ({ ...props }: Props) => {
  const brandContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const brandContainer = brandContainerRef.current;
    if (!brandContainer) return;

    const brands: HTMLElement[] = Array.from(
      brandContainer.children
    ) as HTMLElement[];

    const shuffle = (array: HTMLElement[]): HTMLElement[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledBrands = shuffle(brands);

    shuffledBrands.forEach((brand) => {
      brandContainer.appendChild(brand);
    });
  }, []);
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
        className="brand__area d-none d-lg-block "
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="brand__flex"
                ref={brandContainerRef}
                id="brandContainer"
              >
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br3.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br4.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br5.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br6.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br7.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br8.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br9.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br10.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br11.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br12.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br13.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br15.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br16.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br19.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br21.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br23.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br24.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br25.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br26.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br27.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br28.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br29.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br30.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br31.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br32.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br34.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br35.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br36.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br37.png" alt="" />
                  </a>
                </div>
                <div className="single__brand">
                  <a href="#">
                    <img src="/assets/img/brand/br38.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
