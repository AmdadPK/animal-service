import './App.css';
import Animal from './components/Animal/Animal';
import Care from './components/Care/Care';
import Cleaner from './components/Cleaner/Cleaner';
import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Sales from './components/Sales/Sales';
import Team from './components/Team/Team';
import Vaccine from './components/Vaccine/Vaccine';

function App() {
  return (
    <div className="App">
      <Header />
      <Animal />
      <Vaccine />
      <Cleaner />
      <Care />
      <Sales />
      <Team />
      <Counter />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
