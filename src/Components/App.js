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
import { Route, Routes, Link, HashRouter } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <nav>
        {/* <Link to='/'> */}
          <Header />
        {/* </Link> */}
      </nav>
      {/* <Routes> */}
        {/* <Route path='/' element={ <Header />} /> */}
        {/* <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/project' element={ <Project />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/careers' element={ <Careers />} />
        <Route path='/careers:id' element={ <JobPost />} />
      </Routes> */}
      <MainPage />
      <Footer /> 
    </div>
  );
}

export default App;
