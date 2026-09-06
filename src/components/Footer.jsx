import { Link } from 'react-router-dom';
import logoBelfon from '../assets/logo-belfon.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <Link to="/" className="block mb-8">
              <img src={logoBelfon} alt="Belfon Technologies" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Technology, strategy, and experience working together to create better business outcomes.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Oracle ERP</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Digital Experience Design</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Consulting Services</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Solutions Deployment</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Managed Services</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Staff Augmentation</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Belfon Technologies. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
