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
        <CarouselItem>
          <div style={{backgroundImage: 'url(/img/Web-Development.jpeg', backgroundRepeat: 'no-repeat', backgroundSize:'500px', height:'500px', width:'500px'}}>
          <h1>Website Design</h1>
          </div>
        </CarouselItem>
        <CarouselItem>Custom solutions</CarouselItem>
        <CarouselItem>Product Management Systems</CarouselItem>
        <CarouselItem>Integration Services</CarouselItem>
        <CarouselItem>IT Help Desk</CarouselItem>
      </Carousel>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
