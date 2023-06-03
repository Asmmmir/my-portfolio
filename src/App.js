import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation'
import {BrowserRouter, Outlet} from 'react-router-dom'
import Projects from './components/Projects/Projects';

function App() {
  return (
  <BrowserRouter>
  <Navigation />
  <Header />
  <Projects />
  </BrowserRouter>
  );
}

export default App;
