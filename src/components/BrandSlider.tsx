// import { imgList } from "../data";
interface Props extends React.ComponentPropsWithoutRef<"div"> {
  imgList: {
    src: string;
    alt: string;
    link: string;
  }[];
}

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const BrandSlider = ({ imgList }: Props) => {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  };

  return (
    <section
      className="brand__slider d-lg-none d-block"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="brand__active">
        <OwlCarousel className="owl-theme" {...options}>
          {imgList.map((item, index) => {
            return (
              <div className="" key={index}>
                <a href={item.link}>
                  <img src={item.src} alt={item.alt} />
                </a>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </section>
  );
};

// <div className="container">
//         <div className="row">
//           <div className="col-xl-12">
//             <div className="brand__slider-content">
//               <div className="brand__active owl-carousel" id="brandCarousel2">
//                 <div className="single__brand">
//                   <a href="#">
//                     <img src="img/brand/br1.png" alt="" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
