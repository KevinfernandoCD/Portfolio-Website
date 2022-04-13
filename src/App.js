import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/Abouts/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Strongholds from './components/Strongholds/Strongholds';
import Contacts from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import Service from './components/Services/Service';

import './App.css';

function App() {
  return (
<>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Service/>
  <Portfolio/>
  <Strongholds/>
  <Contacts/>
  <Footer/>
</>

  );

}

export default App;
