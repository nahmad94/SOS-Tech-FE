import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import Home from './Home'
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
import Carousel from './Carousel/Carousel';
import CarouselItem from './Carousel/CarouselItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
