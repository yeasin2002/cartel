import { HeaderArea, Hero, Brand, BrandSlider } from "./components";
import { imgList } from "./data";
import { shuffleImgList } from "./utils/randomShuffle";

const App = () => {
  const shuffledImages = shuffleImgList(imgList);
  return (
    <div>
      <HeaderArea />
      <main className="site__body">
        <Hero />
        <Brand />
        <BrandSlider imgList={shuffledImages} />
        <BrandSlider imgList={shuffledImages} />
      </main>
    </div>
  );
};

export default App;
