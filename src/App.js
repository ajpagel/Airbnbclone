import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/card';
import data from './data';
console.log(data);

//<Hero />

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
//instead of item = {item} after key={item.id}
// {...item} = takes all properties of the data from data.js like id, title, etc and creates
//separate property for each one



function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id} //id comes from the data.js , this gets rid of warningfile this is unique
        {...item} //or item = {item} then change props to props.item.location....
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App;
