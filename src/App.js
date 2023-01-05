import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx/Header';
import Nav from './nav/Nav';
import About from './assets/About';
import Exprens from './assets/exprenes/Exprens';
import Testminals from './testmanilas/Testminals';


import Protfil from './protofil/Protfil';

import Concat from './concat/Concat';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App text-red-300">
<Header/>
<Nav/>
<About/>
<Exprens/>
{/* <Service/> */}
<Protfil/>
<Testminals/>
<Concat/>
<Footer/>


    </div>
  );
}

export default App;
