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
      <Carousel className='carousel'>
        <CarouselItem className='carousel'>
          <div style={{backgroundImage: 'url(/img/Web-Development.jpeg', backgroundRepeat: 'no-repeat', backgroundSize:'contains', height:'70vh', width:'100vh', alignContent: 'center' }}>
          <h1>Website Design</h1>
          <p>Web design and </p>
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
