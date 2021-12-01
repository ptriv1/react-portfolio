import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
        <div className="Header">
          <Header />
          <div>
            <Router>
              <Menu />
              <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/resume' element={<Resume/>} />
              </Routes>
            </Router>
          </div>  
        </div>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <Resume />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
