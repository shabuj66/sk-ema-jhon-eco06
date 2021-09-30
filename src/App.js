import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
