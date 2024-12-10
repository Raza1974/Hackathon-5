import Link from 'next/link';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+12255550118" className="flex items-center">
              <Phone size={16} className="mr-2" />
              (225) 555-0118
            </a>
            <a href="mailto:michelle.rivera@example.com" className="flex items-center">
              <Mail size={16} className="mr-2" />
              michelle.rivera@example.com
            </a>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center space-x-5">
            <span>Follow Us :</span>
            <div className="flex space-x-1">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white text-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Bandage
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="flex items-center">
              Login / Register
            </Link>
            <button aria-label="Search" className="p-2">
              🔍
            </button>
            <button aria-label="Cart" className="p-2">
              🛒
              <span className="ml-1">1</span>
            </button>
            <button aria-label="Wishlist" className="p-2">
              ❤️
              <span className="ml-1">1</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;