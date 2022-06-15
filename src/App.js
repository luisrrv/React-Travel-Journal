import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section id='cards-list' className='cards-list'>
      {
        Data.map(item => {
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
    </div>
  );
}

export default App;
