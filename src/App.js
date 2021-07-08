import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return <ImageSlider slides={SliderData} autoplayTime={4000} />;
}

export default App;
