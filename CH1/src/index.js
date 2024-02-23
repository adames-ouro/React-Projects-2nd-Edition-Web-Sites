import ReactDOM from 'react-dom/client';

function App() {
    return <h1> Rick and Morty </h1>;
}

const container = document.getElementById('root'); // same as html file in public folder ->  <section id="root"></section>
const root = ReactDOM.createRoot(container);
root.render(<App />); // mounts app component to an element with the root ID selector in the document (entry point of the app)