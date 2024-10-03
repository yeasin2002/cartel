import { HeaderArea, Hero, Brand, BrandSlider } from "./components";

const App = () => {
  return (
    <div>
      <HeaderArea />
      <main className="site__body">
        <Hero />
        <Brand />
        <BrandSlider />
      </main>
    </div>
  );
};

export default App;
