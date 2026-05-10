import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-dark/95 backdrop-blur border-b border-primary/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">LeaseTeq</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">How it works</Link>
            <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <button className="btn-primary hidden sm:block">Get Started</button>
        </div>
      </div>
    </header>
  );
}
