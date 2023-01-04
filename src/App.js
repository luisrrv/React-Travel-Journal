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

  // const handleScroll = event => {
  //   var lastScrollTop = 0;
  //   console.log(blob);

  //   var st = window.pageYOffset || document.documentElement.scrollTop;
  //   if (st > lastScrollTop){
  //     var blob = document.querySelector('.blob');
  //     console.log(blob);
  //     blob.style.transform = 'translateY(-10px)';
  //   } else {
  //     var blob = document.querySelector('.blob');
  //     console.log(blob);
  //     blob.style.transform = 'translateY(10px)';
  //   }
  //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // };

  return (
    <div className="App" /*nScroll={handleScroll}*/>
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
