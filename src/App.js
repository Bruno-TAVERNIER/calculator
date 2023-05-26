import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'; 
import Calculator from './components/Calculator';
import './App.css';
import Logo from './logo.svg';
function App() {
  return (
    <div className="app">
      <MyHeader title="FX-80 Teubé" src={ Logo }/>
      <Calculator />
      <MyFooter />
    </div>
  );
}

export default App;
