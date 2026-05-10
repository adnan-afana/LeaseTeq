import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">LeaseTeq</h3>
            <p className="text-gray-400">Premium car leasing made simple and affordable.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Vehicles</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Privacy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Terms</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Cookies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 LeaseTeq. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-primary">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-primary">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
