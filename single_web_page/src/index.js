import ReactDOM from 'react-dom/client';
import List from './components/List'; // refers to the List component in the List.js file
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className = 'container'>
            <nav className = 'navbar sticky-top navbar-light bg-dark'>
                <h1 className = 'navbar-brand text-light'> 
                Rick and Morty </h1>
            </nav>
            <List />
        </div>
    );
}

const container = document.getElementById('root'); // same as html file in public folder ->  <section id="root"></section>
const root = ReactDOM.createRoot(container);
root.render(<App />); // mounts app component to an element with the root ID selector in the document (entry point of the app)