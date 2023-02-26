import logo from './logo.svg';
import './App.css';
import Travel from './Travel';
import data from './data.js'
import Header from './Header.js'

function App() {
  const allTravels = data.map(item => {
    return <Travel 
      id={item.id}
      {...item}
    />
  })

  return (
    <div>
      <Header />
      {allTravels}
    </div>
  );
}

export default App;
