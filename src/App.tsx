import { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

import { HeaderArea, Hero, Brand, BrandSlider, OutReach } from "./components";

import { imgList } from "./data";
import { shuffleImgList } from "./utils/randomShuffle";

const App = () => {
  useEffect(() => {
    // jQuery code here
    $(".my-element").click(function () {
      alert("Element clicked!");
    });
  }, []);

  const shuffledImages = shuffleImgList(imgList);
  return (
    <div>
      <HeaderArea />
      <main className="site__body">
        <Hero />
        <OutReach />
        <Brand />
        <BrandSlider imgList={imgList} />
        <BrandSlider imgList={shuffledImages} />
      </main>
    </div>
  );
};

export default App;
