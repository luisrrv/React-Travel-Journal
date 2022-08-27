// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'
import Footer from './components/Footer';

function App() {
  var reversedData = [...Data].reverse();
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section id='cards-list' className='cards-list'>
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
