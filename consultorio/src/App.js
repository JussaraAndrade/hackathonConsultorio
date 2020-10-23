
import './App.css';
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Carousel from '../src/components/Carousel'
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';

function App() {
  return (

     <>
    <Header/>
    <Servicos/>
    <Carousel/>
    <Sobre/>
    <Footer/>
     </>
   
  );
}

export default App;
