import '../App.css';
import Background from './Background';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Nav />
      </div>
      <Background />
    </div>
  );
}

export default App;
