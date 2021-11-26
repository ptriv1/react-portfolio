import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
    </Router>
        <div className="Header">
          <Header />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
