import '../../App.css';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to='/'>Back to Top</Link>
    </div>
  );
}