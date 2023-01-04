import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import Home from './Home'
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import Careers from './Careers/Careers';
import JobPost from './Careers/JobPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      {/* <Careers /> */}
      <JobPost />
    </div>
  );
}

export default App;
