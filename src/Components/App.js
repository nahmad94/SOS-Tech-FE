import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import Home from './Home'
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import Carousel from './Carousel/Carousel';
import CarouselItem from './Carousel/CarouselItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Carousel>
        <CarouselItem>some item here 1</CarouselItem>
        <CarouselItem>some item here 2</CarouselItem>
        <CarouselItem>some item here 3</CarouselItem>
        <CarouselItem>some item here 4</CarouselItem>
      </Carousel>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
