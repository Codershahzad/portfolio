
import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-olive to-maroon rounded-lg"></div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-400">
              Creating exceptional digital experiences with modern web technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-olive transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Consulting', 'Maintenance'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-maroon transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                Subscribe for updates and insights.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-olive"
                />
                <button className="px-4 py-2 bg-olive hover:bg-olive-dark rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>Made </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
              <span>shehzad</span>
            </div>
            
            <div className="flex space-x-6">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-olive transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;