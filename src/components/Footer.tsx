
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-memorial-50 border-t border-memorial-100 py-12 px-6 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-medium text-memorial-900">Memento</h3>
          <p className="text-memorial-600 text-sm max-w-xs">
            Preserving memories with dignity and respect. A place to honor and celebrate the lives of those who have passed.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-memorial-900 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-memorial-600 hover:text-memorial-800 transition-colors text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/obituaries" className="text-memorial-600 hover:text-memorial-800 transition-colors text-sm">
                Obituaries
              </Link>
            </li>
            <li>
              <Link to="/submit" className="text-memorial-600 hover:text-memorial-800 transition-colors text-sm">
                Submit Obituary
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-memorial-600 hover:text-memorial-800 transition-colors text-sm">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-memorial-900 mb-4">Contact</h4>
          <address className="not-italic text-memorial-600 text-sm space-y-2">
            <p>1234 Memory Lane</p>
            <p>Remembrance City, RC 56789</p>
            <p className="mt-3">
              <a href="mailto:info@memento.com" className="hover:text-memorial-800 transition-colors">
                info@memento.com
              </a>
            </p>
            <p>
              <a href="tel:+15551234567" className="hover:text-memorial-800 transition-colors">
                (555) 123-4567
              </a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-memorial-100 flex flex-col md:flex-row justify-between items-center">
        <p className="text-memorial-500 text-sm">
          © {currentYear} Memento. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-memorial-500 hover:text-memorial-800 transition-colors text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-memorial-500 hover:text-memorial-800 transition-colors text-sm">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
