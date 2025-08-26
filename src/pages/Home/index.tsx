import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import '../../App.css';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to='/about'>Go to About Page</Link>
    </div>
  );
}