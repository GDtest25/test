import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="text-center text-white font-light">
        <Link to="/admin" className="hover:text-red-500 transition-colors">
          <p>GD.MBA - Tous droits réservés</p>
        </Link>
      </div>
    </footer>
  );
}