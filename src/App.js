// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'
import Footer from './components/Footer';
import { BsFillPinMapFill } from 'react-icons/bs'

function App() {
  var reversedData = [...Data].reverse();
  return (
    <div className="App">
      <div className="bg"></div>
      <Nav />
      <Hero />
      <section id='cards-list' className='cards-list'>
      <div className="all"><BsFillPinMapFill color='#ffae00' /> All Locations</div>
      {
        reversedData.map(item => {
          return (
            <Card
                key={item.id}
                item={item}
                // {...item}
              />
          )
        })
      }
      </section>
      <Footer />
    </div>
  );
}

export default App;
