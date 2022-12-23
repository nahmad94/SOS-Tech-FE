import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import Home from './Home'
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <h1>Linked</h1>
      <Header />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
