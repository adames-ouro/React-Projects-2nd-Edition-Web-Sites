import Header from './components/Header';
import './App.css';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName='octocat'/>
    </div>
  );
}

export default App;