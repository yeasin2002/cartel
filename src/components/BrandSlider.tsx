import br1 from "../assets/img/brand/br1.png";
import br2 from "../assets/img/brand/br2.png";
import br3 from "../assets/img/brand/br3.png";
import br4 from "../assets/img/brand/br4.png";
import br5 from "../assets/img/brand/br5.png";
import br6 from "../assets/img/brand/br6.png";
import br7 from "../assets/img/brand/br7.png";
import br8 from "../assets/img/brand/br8.png";
import br9 from "../assets/img/brand/br9.png";
import br10 from "../assets/img/brand/br10.png";
import br11 from "../assets/img/brand/br11.png";
import br12 from "../assets/img/brand/br12.png";
import br13 from "../assets/img/brand/br13.png";
import br14 from "../assets/img/brand/br14.png";
import br15 from "../assets/img/brand/br15.png";
import br16 from "../assets/img/brand/br16.png";
import br17 from "../assets/img/brand/br17.png";
import br18 from "../assets/img/brand/br18.png";
import br19 from "../assets/img/brand/br19.png";
import br20 from "../assets/img/brand/br20.png";
import br21 from "../assets/img/brand/br21.png";
import br22 from "../assets/img/brand/br22.png";
import br23 from "../assets/img/brand/br23.png";
import br24 from "../assets/img/brand/br24.png";
import br25 from "../assets/img/brand/br25.png";
import br26 from "../assets/img/brand/br26.png";
import br27 from "../assets/img/brand/br27.png";
import br28 from "../assets/img/brand/br28.png";
import br29 from "../assets/img/brand/br29.png";
import br30 from "../assets/img/brand/br30.png";
import br31 from "../assets/img/brand/br31.png";
import br32 from "../assets/img/brand/br32.png";
import br33 from "../assets/img/brand/br33.png";
import br34 from "../assets/img/brand/br34.png";
import br35 from "../assets/img/brand/br35.png";
import br36 from "../assets/img/brand/br36.png";

const imgList = [
  {
    src: br1,
    alt: "",
    link: "#",
  },
  {
    src: br2,
    alt: "",
    link: "#",
  },
  {
    src: br3,
    alt: "",
    link: "#",
  },
  {
    src: br4,
    alt: "",
    link: "#",
  },
  {
    src: br5,
    alt: "",
    link: "#",
  },
  {
    src: br6,
    alt: "",
    link: "#",
  },
  {
    src: br7,
    alt: "",
    link: "#",
  },
  {
    src: br8,
    alt: "",
    link: "#",
  },
  {
    src: br9,
    alt: "",
    link: "#",
  },
  {
    src: br10,
    alt: "",
    link: "#",
  },
  {
    src: br11,
    alt: "",
    link: "#",
  },
  {
    src: br12,
    alt: "",
    link: "#",
  },
  {
    src: br13,
    alt: "",
    link: "#",
  },
  {
    src: br14,
    alt: "",
    link: "#",
  },
  {
    src: br15,
    alt: "",
    link: "#",
  },
  {
    src: br16,
    alt: "",
    link: "#",
  },
  {
    src: br17,
    alt: "",
    link: "#",
  },
  {
    src: br18,
    alt: "",
    link: "#",
  },
  {
    src: br19,
    alt: "",
    link: "#",
  },
  {
    src: br20,
    alt: "",
    link: "#",
  },
  {
    src: br21,
    alt: "",
    link: "#",
  },
  {
    src: br22,
    alt: "",
    link: "#",
  },
  {
    src: br23,
    alt: "",
    link: "#",
  },
  {
    src: br24,
    alt: "",
    link: "#",
  },
  {
    src: br25,
    alt: "",
    link: "#",
  },
  {
    src: br26,
    alt: "",
    link: "#",
  },
  {
    src: br27,
    alt: "",
    link: "#",
  },
  {
    src: br28,
    alt: "",
    link: "#",
  },
  {
    src: br29,
    alt: "",
    link: "#",
  },
  {
    src: br30,
    alt: "",
    link: "#",
  },
  {
    src: br31,
    alt: "",
    link: "#",
  },
  {
    src: br32,
    alt: "",
    link: "#",
  },
  {
    src: br33,
    alt: "",
    link: "#",
  },
  {
    src: br34,
    alt: "",
    link: "#",
  },
  {
    src: br35,
    alt: "",
    link: "#",
  },
  {
    src: br36,
    alt: "",
    link: "#",
  },
];

export const BrandSlider = () => {
  return (
    <section
    //   className="brand__slider d-lg-none d-block"
    //   data-aos="fade-up"
    //   data-aos-duration={1000}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="brand__slider-content">
              <div className="brand__active owl-carousel" id="brandCarousel2">
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
      </div>
    </section>
  );
};
