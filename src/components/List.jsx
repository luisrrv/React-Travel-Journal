import '../App.css';
import Nav from './Nav'
import Hero from './Hero'
import Card from './Card'
import Data from '../Data'
import Footer from './Footer';
import { BsFillPinMapFill } from 'react-icons/bs'

function List() {
  var reversedData = [...Data].reverse();
  return (
    <div className="List" /*nScroll={handleScroll}*/>
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

export default List;
