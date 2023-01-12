import './App.css';
import Hello from './components/Hello';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello/>
       <Title skola="React"/>
       <Title skola="React" info="och props"/>
      

        
      </header>
    </div>
  );
}

export default App;
